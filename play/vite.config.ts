import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@wahle-ui': path.resolve(__dirname, '../packages'),
    },
  },
  plugins: [vue()],
})
