import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Todas las rutas
      '^/': {
        target: 'https://dummyjson.com',
        changeOrigin: true,
      },
    },
  },
})
