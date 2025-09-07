import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/avaliacao-atendimento/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'index.html'
      }
    }
  },
  // Adicione esta seção para configurar variáveis HTML
  define: {
    'import.meta.env.VITE_APP_TITLE': JSON.stringify('Seu Título Personalizado')
  }
})