import { Link } from 'react-router-dom';
import { useCart } from '../context/useCart';
import './ProductCard.css';

/**
 * Componente ProductCard que muestra la información básica de un producto,
 * incluyendo imagen, título, precio y un botón para agregar al carrito.
 *
 * @component
 * @param {Object} props - Propiedades del componente
 * @param {Object} props.product - Objeto producto con datos para mostrar
 * @param {number|string} props.product.id - ID único del producto
 * @param {string} props.product.image - URL de la imagen del producto
 * @param {string} props.product.title - Título o nombre del producto
 * @param {number} props.product.price - Precio del producto
 * @returns {JSX.Element} Elemento de tarjeta de producto
 */
const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    return (
        <div className="product-card">
            <Link to={`/product/${product.id}`} className="product-card__link">
                <img src={product.image} alt={product.title} className="product-card__image" />
                <h3 className="product-card__title">{product.title}</h3>
            </Link>
            <p className="product-card__price">${product.price}</p>
            <button className="product-card__button" onClick={() => addToCart(product)}>
                Agregar al carrito
            </button>
        </div>
    );
};

export default ProductCard;
