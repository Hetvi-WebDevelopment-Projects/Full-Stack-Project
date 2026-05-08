import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
console.log(import.meta.env.VITE_FRONTEND_URL);

export default defineConfig({
  
  plugins: [react()],
  
})
