import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync, writeFileSync } from 'fs'
import { join } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-404-and-nojekyll',
      closeBundle() {
        // Копира 404.html в dist след build
        copyFileSync(
          join(__dirname, 'public', '404.html'),
          join(__dirname, 'dist', '404.html')
        )
        // Създава .nojekyll файл за да се игнорират Jekyll правилата
        const nojekyllPath = join(__dirname, 'dist', '.nojekyll')
        writeFileSync(nojekyllPath, '')
      },
    },
  ],
  base: '/calculator-eu/', // Важно за GitHub Pages - път към репозитория
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash].[ext]',
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js',
      },
    },
  },
})
