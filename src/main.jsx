import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'normalize.css';
import './index.css';
import App from './App';

/**
 * Preload de fuentes para mejorar la performance.
 * Se crean etiquetas <link> para conectar con Google Fonts.
 */
const fontPreloadLinks = [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
  { 
    rel: 'stylesheet', 
    href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap'
  }
];

fontPreloadLinks.forEach(linkConfig => {
  const link = document.createElement('link');
  Object.assign(link, linkConfig);
  document.head.appendChild(link);
});

/**
 * Punto de entrada principal para renderizar la app React.
 * Utiliza React 18+ API createRoot y envuelve con StrictMode.
 */
const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

/**
 * Registro de Service Worker para soporte PWA en producción.
 * Notifica al usuario cuando hay una nueva versión disponible.
 */
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  import('virtual:pwa-register').then(({ registerSW }) => {
    registerSW({
      onNeedRefresh: () => {
        if (confirm('Hay una nueva versión disponible. ¿Recargar?')) {
          window.location.reload();
        }
      }
    });
  });
}
