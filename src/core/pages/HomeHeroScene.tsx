import { useRef } from 'react'
import { useThreeScene } from '@/core/hooks/useThreeScene'

/**
 * HomeHeroScene — Three.js 3D 배경 씬
 * Home.tsx에서 분리하여 lazy loading으로 코드 분할
 */
export default function HomeHeroScene() {
  const canvasRef = useRef<HTMLDivElement>(null)
  useThreeScene(canvasRef, { particleCount: 600, crystalSize: 1.2 })

  return <div className="home-hero-canvas" ref={canvasRef} aria-hidden="true" />
}
