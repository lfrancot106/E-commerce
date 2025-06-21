🛍️ E-commerce App - Grupo Éxito



Aplicación web moderna para tienda online desarrollada con React y Vite, que permite a los usuarios navegar productos, gestionar carritos y completar compras.

🚀 Características principales
🛒 Funcionalidades del carrito
Añadir/eliminar productos

Modificar cantidades

Persistencia con localStorage

Cálculo automático de totales

🏪 Experiencia de compra
Catálogo de productos organizado

Vista detallada de cada producto

Checkout con formulario integrado

Página de confirmación post-compra

⚙️ Tecnologías clave
React 18 para componentes interactivos

Vite para desarrollo ultrarrápido

React Router para navegación SPA

Context API para gestión de estado

Vitest para pruebas unitarias

🌟 Características técnicas destacadas
🎨 Metodología BEM para CSS
Estructura clara y mantenible de estilos

Convención de nombres: .block__element--modifier

 Documentación con JSDoc
Documentación completa de componentes y funciones

Generación automática de docs con jsdoc

Ejemplo:
/**
 * @function useCart
 * @description Hook personalizado para gestionar el carrito de compras
 * @returns {Object} { cartItems, addToCart, removeFromCart, getTotal }
 */

✨ Normalize.css como base de estilos
Implementado para garantizar consistencia cross-browser

Reset de estilos predeterminados para un inicio limpio

📜 Documentación técnica adicional
Para generar documentación:
npx jsdoc src -r -d docs

Requisitos de documentación:

Todos los componentes principales documentados

Explicación de props y métodos


🛠️ Instalación
Clona el repositorio:
git clone https://github.com/tu-usuario/ecommerce-exito.git

Instala dependencias:
npm install

Inicia el servidor de desarrollo:
npm run dev

📂 Estructura del proyecto
src
    │   App.css
    │   App.jsx
    │   index.css
    │   main.jsx
    │
    ├───assets
    ├───components
    │       BackButton.css
    │       BackButton.jsx
    │       Footer.css
    │       Footer.jsx
    │       Header.css
    │       Header.jsx
    │       ProductCard.css
    │       ProductCard.jsx
    │       SearchBar.css
    │       SearchBar.jsx
    │
    ├───context
    │       CartContext.js
    │       CartProvider.jsx
    │       useCart.js
    │
    ├───pages
    │       CartPage.css
    │       CartPage.jsx
    │       Checkout.css
    │       Checkout.jsx
    │       Home.css
    │       Home.jsx
    │       NotFound.css
    │       NotFound.jsx
    │       Payment.css
    │       Payment.jsx
    │       ProductDetail.css
    │       ProductDetail.jsx
    │       Thanks.css
    │       Thanks.jsx
    │
    └───__tests__
            Checkout.test.jsx
            ProductCard.test.jsx
            ProductDetail.test.jsx
            SearchBar.test.jsx
            Thanks.test.jsx

🧪 Testing
Ejecuta pruebas unitarias con:
npm run test


Mejoras técnicas
Migración a Next.js para SSR

Mejoras de accesibilidad (WCAG 2.1)

Crea tu rama: git checkout -b mi-feature

Haz commit: git commit -m 'Add amazing feature'

Haz push: git push origin mi-feature

Abre un Pull Request

📜 Licencia
MIT © Leonardo Fabio Franco Tangarife

📬 Contacto
📧 Email: Leonardo.franco.tangarife@gmail.com

💼 LinkedIn: https://www.linkedin.com/in/leonardo-franco-395769261/

🐙 GitHub: https://github.com/lfrancot106

Este proyecto fue creado como demostración técnica para Grupo Éxito