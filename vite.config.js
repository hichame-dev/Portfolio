import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import compression from 'vite-plugin-compression'

export default defineConfig({
  plugins: [
    react(),
    compression(), // activation gzip / brotli automatique
  ],
})
