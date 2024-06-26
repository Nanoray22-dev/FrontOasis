import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['chart.js', 'chartjs-adapter-date-fns', 'date-fns']
  },
  resolve: {
    alias: {
      'gsap': 'gsap'
    },
  },
  build: {
    outDir: 'dist'
  }
})
