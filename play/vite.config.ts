import { defineConfig } from 'vite'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const __dirname = fileURLToPath(new URL('.', import.meta.url))
  
  const alias: any[] = [
    { find: /^whale-ui$/, replacement: path.resolve(__dirname, '../packages/index.ts') },
    { find: /^@whale-ui/, replacement: path.resolve(__dirname, '../packages') }
  ]

  // 如果是 dist 模式，将 whale-ui 指向打包后的文件
  if (mode === 'dist') {
    alias[0] = { find: /^whale-ui$/, replacement: path.resolve(__dirname, '../dist/whale-ui/es/index.js') }
    alias.push({ find: /^whale-ui\/theme\/index.scss$/, replacement: path.resolve(__dirname, '../dist/whale-ui/theme/index.css') })
  }

  return {
    resolve: {
      alias
    },
    server: {
      fs: {
        allow: [path.resolve(__dirname, '..')]
      }
    },
    optimizeDeps: {
      exclude: ['whale-ui', '@whale-ui/hooks']
    },
    plugins: [vue()],
  }
})