import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartProvider.jsx';
import './index.css'; 
import Checkout from "./pages/Checkout";
import CartPage from './pages/CartPage';
import Header from './components/Header';
import BackButton from "./components/BackButton";
import Footer from './components/Footer';
import Payment from './pages/Payment';
import Thanks from "./pages/Thanks";
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import NotFound from './pages/NotFound'; // Opcional: página 404
import './App.css';

/**
 * Componente principal que envuelve la aplicación con el proveedor
 * del carrito de compras y configura las rutas con React Router.
 *
 * Renderiza el Header, BackButton, Footer y el contenido principal
 * según la ruta actual.
 *
 * @component
 * @returns {JSX.Element} Aplicación completa con rutas
 */
function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        {/* Header con logo Éxito y carrito (siempre visible) */}
        <Header />
        {/* Botón de regreso, visible excepto en la home y página de gracias */}
        <BackButton />
        {/* Contenido principal con rutas */}
        <main className="exito-main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/cart" element={<CartPage />} /> {/* 👈 Ruta del carrito */}
            <Route path="*" element={<NotFound />} /> {/* Ruta para errores 404 */}
            <Route path="/thanks" element={<Thanks />} />
            <Route path="/payment" element={<Payment />} />
          </Routes>
        </main>
        {/* Footer con información de Éxito (siempre visible) */}
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
