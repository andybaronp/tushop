import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://dummyjson.com',
  proxy: {
    // desactiva el proxy de desarrollo
    enabled: false,
  },
  plugins: [react()],
})
