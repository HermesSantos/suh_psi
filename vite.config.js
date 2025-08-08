import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: "/suh_psi/",
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    port: 3000
  }
})

