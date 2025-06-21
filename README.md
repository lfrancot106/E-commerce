🛍️ E-commerce App – Grupo Éxito
Aplicación web moderna de tienda online desarrollada con React y Vite, que permite a los usuarios navegar productos, gestionar el carrito de compras y completar el proceso de pago.

🚀 Características principales
🛒 Carrito de compras
Añadir y eliminar productos.

Modificar cantidades.

Persistencia con localStorage.

Cálculo automático de totales.

🏪 Experiencia de compra
Catálogo de productos organizado.

Vista detallada por producto.

Checkout con formulario integrado.

Página de confirmación post-compra.

⚙️ Tecnologías utilizadas
React 18 – Para componentes interactivos.

Vite – Compilación rápida y eficiente.

React Router – Navegación estilo SPA.

Context API – Gestión de estado global.

Vitest – Pruebas unitarias.

🌟 Características técnicas
🎨 Metodología BEM para CSS
Estructura clara y mantenible:

.block__element--modifier

🧾 Documentación con JSDoc
Documentación generada automáticamente para funciones y componentes.

Ejemplo:
/**
 * @function useCart
 * @description Hook personalizado para gestionar el carrito de compras
 * @returns {Object} { cartItems, addToCart, removeFromCart, getTotal }
 */


Para generar la documentación:
npx jsdoc src -r -d docs


✨ Normalize.css como base
Estilos consistentes entre navegadores.

Reset limpio para una base estable.

🛠️ Instalación
1.Clona el repositorio:
git clone https://github.com/lfrancot106/E-commerce.git

2.Instala las dependencias:
npm install

3.Inicia el servidor de desarrollo:
npm run dev

📂 Estructura del proyecto
src/
│   App.jsx
│   main.jsx
│   index.css
│   App.css
│
├───assets/
├───components/
│       BackButton.jsx, Header.jsx, Footer.jsx, etc.
├───context/
│       CartContext.js, CartProvider.jsx, useCart.js
├───pages/
│       Home.jsx, CartPage.jsx, ProductDetail.jsx, Checkout.jsx, Payment.jsx, Thanks.jsx, NotFound.jsx
├───__tests__/
│       Checkout.test.jsx, ProductCard.test.jsx, etc.


🧪 Testing
Ejecuta las pruebas unitarias con:
npm run test

🧠 Mejoras técnicas futuras
Migración a Next.js para renderizado del lado del servidor (SSR).

Mejoras en accesibilidad (cumplimiento con WCAG 2.1).

Modularización y optimización para producción.

🧾 Contribuir
1.Crea tu rama:
git checkout -b mi-feature


2.Haz commit:
git commit -m 'Add amazing feature'

3.Haz push:
git push origin mi-feature

4.Abre un Pull Request.

## 📜 Licencia

MIT © Leonardo Fabio Franco Tangarife

---

## ⚠️ Importante

> Este proyecto fue desarrollado como parte de una **prueba técnica** para el proceso de selección en **Grupo Éxito**.  
> El estilo visual, colores y logotipo utilizados pertenecen a **Grupo Éxito**. No reclamo ningún derecho sobre dichos elementos, y la empresa es libre de usar, modificar o desechar este proyecto según lo considere apropiado.

⚠️ Important
This project was developed as part of a technical assessment for the recruitment process at Grupo Éxito.
The visual style, color palette, and logo used in this project belong to Grupo Éxito. I do not claim any ownership over these elements, and the company is free to use, modify, or discard this project as it sees fit.

---

## 📬 Contacto

📧 Email: [leonardo.franco.tangarife@gmail.com](mailto:leonardo.franco.tangarife@gmail.com)  
💼 LinkedIn: [linkedin.com/in/leonardo-franco-395769261](https://www.linkedin.com/in/leonardo-franco-395769261)  
🐙 GitHub: [github.com/lfrancot106](https://github.com/lfrancot106)

