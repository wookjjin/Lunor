import { fileURLToPath, URL } from 'node:url'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  plugins: [react()],
  css: {
    // 1. CSS 컴파일 및 변환(Transpile)에 Lightning CSS 사용
    transformer: 'lightningcss',

    // 2. Lightning CSS 세부 설정
    lightningcss: {
      // 구형 브라우저 지원을 위한 타겟 설정 (선택 사항)
      // 예: Safari 15 이상, Chrome 100 이상 등
      targets: {
        safari: (15 << 16),
        chrome: (100 << 16),
        firefox: (100 << 16),
      },
      // cssModules는 *.module.css 파일에만 적용되는데 이 프로젝트는 전역 CSS +
      // 수동 BEM 네이밍으로 클래스 충돌을 막고 있어 *.module.css가 하나도 없다.
      // 켜져 있어도 아무 효과가 없어 오해를 유발하므로 제거함.
    },
  },
  build: {
    // 3. 빌드 시 CSS 압축(Minify) 도구로 Lightning CSS 지정
    cssMinify: 'lightningcss',
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: (id: string) => {
          if (id.includes('node_modules/three')) {
            return 'three'
          }
        },
      },
    },
  },
})
