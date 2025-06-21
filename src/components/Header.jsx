import { Link } from 'react-router-dom';
import { useCart } from '../context/useCart';
import './Header.css';

/**
 * Componente Header que muestra el logo de Grupo Éxito (con enlace a la página principal)
 * y un enlace al carrito con el contador de productos.
 *
 * @component
 * @returns {JSX.Element} Elemento header con logo y carrito.
 */
const Header = () => {
    const { getCartCount } = useCart();
    
    return (
        <header className="header">
            <Link to="/">
                <img src="/imageExito.png" alt="Éxito" className="header__logo" />
            </Link>

            <Link to="/cart" className="header__cart">
                🛒 <span className="header__cart-count">{getCartCount()}</span>
            </Link>
        </header>
    );
};

export default Header;
