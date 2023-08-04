import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // 字符串简写写法：http://localhost:5173/foo -> http://localhost:4567/foo
      '/api': {
        target: 'http://43.138.61.49:30000',
        changeOrigin: true,
        configure: (proxy, options) => {
          // proxy 是 'http-proxy' 的实例
        }
      }
    },
  },
})
