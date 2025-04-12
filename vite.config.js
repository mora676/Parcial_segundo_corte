import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production' ? '/Parcial_segundo_corte/' : '/',
  server: {
    open: '/#/Dashboard'
  }
}))