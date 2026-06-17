import type { RefObject } from 'react'
import { useCallback, useEffect, useRef } from 'react'
import * as THREE from 'three'
import { useThemeStore } from '@/app/store/theme.store'

/* =============================================================================
   useThreeScene — Three.js 인터랙티브 3D 배경 커스텀 훅
   - 파티클 필드 + 중앙 크리스탈(정이십면체) 렌더링
   - 마우스 인터랙션 (파티클 attraction/repulsion + 크리스탈 회전)
   - 라이트/다크 테마 연동
   - prefers-reduced-motion 감지
   - IntersectionObserver 기반 렌더링 최적화
   ============================================================================= */

interface UseThreeSceneOptions {
  /** 파티클 수 (기본값: 600) */
  particleCount?: number
  /** 크리스탈 크기 (기본값: 1.2) */
  crystalSize?: number
}

interface SceneContext {
  scene: THREE.Scene
  camera: THREE.PerspectiveCamera
  renderer: THREE.WebGLRenderer
  particles: THREE.Points
  particlePositions: Float32Array
  particleOriginalPositions: Float32Array
  crystal: THREE.Mesh
  crystalWireframe: THREE.LineSegments
  animationId: number
  mouse: { x: number, y: number }
  isVisible: boolean
  isReducedMotion: boolean
  theme: string
}

/** Glacier 색상 팔레트 — CSS 토큰과 매칭 */
const COLORS = {
  dark: {
    bg: 0x0A0E1A,
    particlePrimary: 0x7DD3FC, // --color-primary-100
    particleSecondary: 0xA0B4C4, // --color-neutral-100
    particleTertiary: 0xC8A0F0, // --color-tertiary-100
    crystalColor: 0x7DD3FC,
    crystalWireframe: 0x4A6070,
    ambientLight: 0x1A2438,
    pointLight: 0x7DD3FC,
  },
  light: {
    bg: 0xFFFFFF,
    particlePrimary: 0x0E4D6E, // --color-primary-200
    particleSecondary: 0x4A6070, // --color-neutral-200
    particleTertiary: 0x4D2A73, // --color-tertiary-200
    crystalColor: 0x0E4D6E,
    crystalWireframe: 0x7A8E9C,
    ambientLight: 0xE8F4FC,
    pointLight: 0x0E4D6E,
  },
}

/** 파티클 크기 배열 생성 (랜덤 크기) */
function createParticleSizes(count: number): Float32Array {
  const sizes = new Float32Array(count)
  for (let i = 0; i < count; i++) {
    sizes[i] = Math.random() * 0.04 + 0.01
  }
  return sizes
}

/** 파티클 색상 배열 생성 */
function createParticleColors(count: number, palette: typeof COLORS.dark): Float32Array {
  const colors = new Float32Array(count * 3)
  const colorPool = [
    new THREE.Color(palette.particlePrimary),
    new THREE.Color(palette.particleSecondary),
    new THREE.Color(palette.particleTertiary),
  ]

  for (let i = 0; i < count; i++) {
    const color = colorPool[Math.floor(Math.random() * colorPool.length)]
    colors[i * 3] = color.r
    colors[i * 3 + 1] = color.g
    colors[i * 3 + 2] = color.b
  }
  return colors
}

/** 파티클 초기 위치 배열 생성 */
function createParticlePositions(count: number): { positions: Float32Array, originalPositions: Float32Array } {
  const positions = new Float32Array(count * 3)
  const originalPositions = new Float32Array(count * 3)

  for (let i = 0; i < count; i++) {
    const i3 = i * 3
    // 구형 분포 (반경 8~12)
    const radius = Math.random() * 4 + 8
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(2 * Math.random() - 1)

    positions[i3] = radius * Math.sin(phi) * Math.cos(theta)
    positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
    positions[i3 + 2] = radius * Math.cos(phi)

    originalPositions[i3] = positions[i3]
    originalPositions[i3 + 1] = positions[i3 + 1]
    originalPositions[i3 + 2] = positions[i3 + 2]
  }

  return { positions, originalPositions }
}

/** 크리스탈(정이십면체) 메시 생성 */
function createCrystal(size: number, palette: typeof COLORS.dark, isLight: boolean): { mesh: THREE.Mesh, wireframe: THREE.LineSegments } {
  const geometry = new THREE.IcosahedronGeometry(size, 1)
  const material = new THREE.MeshPhongMaterial({
    color: palette.crystalColor,
    transparent: true,
    opacity: isLight ? 0.35 : 0.15,
    shininess: 100,
    side: THREE.DoubleSide,
  })
  const mesh = new THREE.Mesh(geometry, material)

  // 와이어프레임 오버레이
  const wireframeGeometry = new THREE.IcosahedronGeometry(size * 1.01, 1)
  const wireframeMaterial = new THREE.LineBasicMaterial({
    color: palette.crystalWireframe,
    transparent: true,
    opacity: isLight ? 0.8 : 0.6,
  })
  const wireframe = new THREE.LineSegments(
    new THREE.WireframeGeometry(wireframeGeometry),
    wireframeMaterial,
  )

  return { mesh, wireframe }
}

/** 씬 초기화 */
function initScene(
  container: HTMLDivElement,
  particleCount: number,
  crystalSize: number,
  theme: string,
): SceneContext {
  const palette = theme === 'light' ? COLORS.light : COLORS.dark

  // Renderer
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance',
  })
  renderer.setSize(container.clientWidth, container.clientHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setClearColor(palette.bg, 1)
  container.appendChild(renderer.domElement)

  // Scene
  const scene = new THREE.Scene()
  scene.fog = new THREE.Fog(palette.bg, 15, 30)

  // Camera
  const camera = new THREE.PerspectiveCamera(
    60,
    container.clientWidth / container.clientHeight,
    0.1,
    100,
  )
  camera.position.set(0, 0, 14)

  // Lights
  const ambientLight = new THREE.AmbientLight(palette.ambientLight, 0.6)
  scene.add(ambientLight)

  const pointLight = new THREE.PointLight(palette.pointLight, 1.5, 50)
  pointLight.position.set(5, 5, 5)
  scene.add(pointLight)

  const pointLight2 = new THREE.PointLight(palette.pointLight, 0.8, 50)
  pointLight2.position.set(-5, -3, 3)
  scene.add(pointLight2)

  // Particles
  const { positions, originalPositions } = createParticlePositions(particleCount)
  const colors = createParticleColors(particleCount, palette)
  const sizes = createParticleSizes(particleCount)

  const particleGeometry = new THREE.BufferGeometry()
  particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
  particleGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1))

  const isLight = theme === 'light'
  const particleMaterial = new THREE.PointsMaterial({
    size: isLight ? 0.12 : 0.08,
    vertexColors: true,
    transparent: true,
    opacity: isLight ? 1.0 : 0.8,
    sizeAttenuation: true,
    blending: isLight ? THREE.NormalBlending : THREE.AdditiveBlending,
    depthWrite: isLight,
  })

  const particles = new THREE.Points(particleGeometry, particleMaterial)
  scene.add(particles)

  // Crystal
  const { mesh: crystal, wireframe: crystalWireframe } = createCrystal(crystalSize, palette, isLight)
  scene.add(crystal)
  scene.add(crystalWireframe)

  // Detect reduced motion
  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  return {
    scene,
    camera,
    renderer,
    particles,
    particlePositions: positions,
    particleOriginalPositions: originalPositions,
    crystal,
    crystalWireframe,
    animationId: 0,
    mouse: { x: 0, y: 0 },
    isVisible: true,
    isReducedMotion,
    theme,
  }
}

/** 테마 변경 시 씬 색상 업데이트 */
function updateSceneTheme(ctx: SceneContext, theme: string) {
  const palette = theme === 'light' ? COLORS.light : COLORS.dark

  // 배경색
  ctx.renderer.setClearColor(palette.bg, 1)
  ctx.scene.fog = new THREE.Fog(palette.bg, 15, 30)

  // 파티클 색상 업데이트
  const colors = createParticleColors(ctx.particlePositions.length / 3, palette)
  ctx.particles.geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

  // 파티클 재질 업데이트 (블렌딩 모드/크기/불투명도)
  const isLight = theme === 'light'
  const particleMat = ctx.particles.material as THREE.PointsMaterial
  particleMat.size = isLight ? 0.12 : 0.08
  particleMat.opacity = isLight ? 1.0 : 0.8
  particleMat.blending = isLight ? THREE.NormalBlending : THREE.AdditiveBlending
  particleMat.depthWrite = isLight
  particleMat.needsUpdate = true

  // 크리스탈 색상 및 불투명도 업데이트
  ;(ctx.crystal.material as THREE.MeshPhongMaterial).color.set(palette.crystalColor)
  ;(ctx.crystal.material as THREE.MeshPhongMaterial).opacity = isLight ? 0.35 : 0.15
  ;(ctx.crystalWireframe.material as THREE.LineBasicMaterial).color.set(palette.crystalWireframe)
  ;(ctx.crystalWireframe.material as THREE.LineBasicMaterial).opacity = isLight ? 0.8 : 0.6

  // 조명 업데이트
  const lights = ctx.scene.children.filter(c => c instanceof THREE.Light) as THREE.Light[]
  if (lights[0])
    (lights[0] as THREE.AmbientLight).color.set(palette.ambientLight)
  if (lights[1])
    (lights[1] as THREE.PointLight).color.set(palette.pointLight)
  if (lights[2])
    (lights[2] as THREE.PointLight).color.set(palette.pointLight)

  ctx.theme = theme
}

/** 애니메이션 루프 */
function animate(ctx: SceneContext) {
  if (!ctx.isVisible) {
    ctx.animationId = requestAnimationFrame(() => animate(ctx))
    return
  }

  const time = Date.now() * 0.001
  const { particlePositions, particleOriginalPositions, isReducedMotion } = ctx
  const count = particlePositions.length / 3

  // 파티클 애니메이션
  if (!isReducedMotion) {
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      const ox = particleOriginalPositions[i3]
      const oy = particleOriginalPositions[i3 + 1]
      const oz = particleOriginalPositions[i3 + 2]

      // 마우스 반영 부유 애니메이션
      const floatX = Math.sin(time * 0.3 + i * 0.01) * 0.2
      const floatY = Math.cos(time * 0.2 + i * 0.015) * 0.2
      const floatZ = Math.sin(time * 0.15 + i * 0.008) * 0.1

      // 마우스 인터랙션 (attraction)
      const mx = ctx.mouse.x * 8
      const my = ctx.mouse.y * 8
      const dx = mx - ox
      const dy = my - oy
      const dist = Math.sqrt(dx * dx + dy * dy)
      const influence = Math.max(0, 1 - dist / 6) * 0.3

      particlePositions[i3] = ox + floatX + dx * influence
      particlePositions[i3 + 1] = oy + floatY + dy * influence
      particlePositions[i3 + 2] = oz + floatZ
    }
    ctx.particles.geometry.attributes.position.needsUpdate = true

    // 파티클 전체 회전
    ctx.particles.rotation.y = time * 0.02
  }

  // 크리스탈 애니메이션
  const crystalRotateSpeed = isReducedMotion ? 0.05 : 0.3
  ctx.crystal.rotation.x = time * crystalRotateSpeed * 0.3
  ctx.crystal.rotation.y = time * crystalRotateSpeed * 0.5

  // 마우스에 따른 크리스탈 미세 틸트
  if (!isReducedMotion) {
    ctx.crystal.rotation.x += ctx.mouse.y * 0.3
    ctx.crystal.rotation.y += ctx.mouse.x * 0.3
  }

  ctx.crystalWireframe.rotation.copy(ctx.crystal.rotation)

  // 크리스탈 호흡 효과
  const breathe = 1 + Math.sin(time * 0.5) * 0.05
  ctx.crystal.scale.set(breathe, breathe, breathe)
  ctx.crystalWireframe.scale.copy(ctx.crystal.scale)

  ctx.renderer.render(ctx.scene, ctx.camera)
  ctx.animationId = requestAnimationFrame(() => animate(ctx))
}

export function useThreeScene(
  containerRef: RefObject<HTMLDivElement | null>,
  options: UseThreeSceneOptions = {},
) {
  const { particleCount = 600, crystalSize = 1.2 } = options
  const ctxRef = useRef<SceneContext | null>(null)
  const theme = useThemeStore(state => state.theme)

  // 씬 초기화 — theme 의존성을 제거하여 테마 전환 시 씬이 재생성되지 않도록 함
  const init = useCallback(() => {
    const container = containerRef.current
    if (!container)
      return

    // 기존 씬 정리
    if (ctxRef.current) {
      cleanup(ctxRef.current, container)
    }

    // theme 대신 store에서 직접 읽어서 의존성에서 제외
    const currentTheme = useThemeStore.getState().theme
    const ctx = initScene(container, particleCount, crystalSize, currentTheme)
    ctxRef.current = ctx

    // 애니메이션 시작
    animate(ctx)

    // 리사이즈 핸들러
    const handleResize = () => {
      if (!container)
        return
      const width = container.clientWidth
      const height = container.clientHeight
      ctx.camera.aspect = width / height
      ctx.camera.updateProjectionMatrix()
      ctx.renderer.setSize(width, height)
    }
    window.addEventListener('resize', handleResize)

    // 마우스 무브 핸들러
    const handleMouseMove = (e: MouseEvent) => {
      ctx.mouse.x = (e.clientX / window.innerWidth) * 2 - 1
      ctx.mouse.y = -(e.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener('mousemove', handleMouseMove)

    // IntersectionObserver — 씬 가시성 감지
    const observer = new IntersectionObserver(
      ([entry]) => {
        ctx.isVisible = entry.isIntersecting
      },
      { threshold: 0.1 },
    )
    observer.observe(container)

    // prefers-reduced-motion 감지
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handleMotionChange = (e: MediaQueryListEvent) => {
      ctx.isReducedMotion = e.matches
    }
    motionQuery.addEventListener('change', handleMotionChange)

    // 정리 함수 반환용 저장
    ;(ctx as any)._cleanup = () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      observer.disconnect()
      motionQuery.removeEventListener('change', handleMotionChange)
    }
  }, [containerRef, particleCount, crystalSize])

  // 초기화 + 정리
  useEffect(() => {
    init()

    return () => {
      const container = containerRef.current
      const ctx = ctxRef.current
      if (ctx && container) {
        ;(ctx as any)._cleanup?.()
        cleanup(ctx, container)
      }
      ctxRef.current = null
    }
  }, [init])

  // 테마 변경 감지 — 씬 색상 업데이트
  useEffect(() => {
    const ctx = ctxRef.current
    if (ctx && ctx.theme !== theme) {
      updateSceneTheme(ctx, theme)
    }
  }, [theme])
}

/** Three.js 리소스 정리 */
function cleanup(ctx: SceneContext, container: HTMLDivElement) {
  cancelAnimationFrame(ctx.animationId)

  // 씬 내 모든 객체 순회하며 dispose
  ctx.scene.traverse((object) => {
    if (object instanceof THREE.Mesh || object instanceof THREE.Points) {
      object.geometry.dispose()
      if (Array.isArray(object.material)) {
        object.material.forEach(m => m.dispose())
      }
      else {
        object.material.dispose()
      }
    }
    if (object instanceof THREE.LineSegments) {
      object.geometry.dispose()
      if (Array.isArray(object.material)) {
        object.material.forEach(m => m.dispose())
      }
      else {
        object.material.dispose()
      }
    }
  })

  ctx.renderer.dispose()

  // canvas DOM 제거
  if (container.contains(ctx.renderer.domElement)) {
    container.removeChild(ctx.renderer.domElement)
  }
}
