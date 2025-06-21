import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto'
    })
  ],
  test: {
    globals: true,                // Para usar describe/test sin importar
    environment: 'jsdom',         // Simula el navegador
    setupFiles: './setupTests.js' // Configuraciones adicionales como jest-dom
  }
});
