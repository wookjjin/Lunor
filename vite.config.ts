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
      // CSS Modules 기능을 사용하고 싶다면 설정 (선택)
      cssModules: true,
    },
  },
  build: {
    // 3. 빌드 시 CSS 압축(Minify) 도구로 Lightning CSS 지정
    cssMinify: 'lightningcss',
  },
})
