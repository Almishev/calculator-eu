import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/calculator-eu/', // Важно за GitHub Pages - път към репозитория
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})

