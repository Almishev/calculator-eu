import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Важно за GitHub Pages - използва относителни пътища
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})

