import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
const ASSET_URL = process.env.ASSET_URL || '';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "",
})
