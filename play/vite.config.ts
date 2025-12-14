import { defineConfig } from 'vite'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: /^whale-ui$/, replacement: path.resolve(fileURLToPath(new URL('.', import.meta.url)), '../packages/index.ts') },
      { find: /^@whale-ui/, replacement: path.resolve(fileURLToPath(new URL('.', import.meta.url)), '../packages') }
    ]
  },
  server: {
    fs: {
      allow: [path.resolve(fileURLToPath(new URL('.', import.meta.url)), '..')]
    }
  },
  optimizeDeps: {
    exclude: ['whale-ui', '@whale-ui/hooks']
  },
  plugins: [vue()],
})
