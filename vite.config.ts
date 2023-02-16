import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import type { UserConfig as VitestUserConfigInterface } from 'vitest/config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.js',
    coverage: {
      all: true,
      include: ['src/*.{ts,tsx}', 'src/Pages/*.{ts,tsx}', 'src/utils/*.ts'],
      exclude: ['src/*.{types,stories,config,d,test,spec}.{ts,tsx}'],
      lines: 80,
      functions: 80,
      branches: 80,
      statements: -10
    }
  }
})
