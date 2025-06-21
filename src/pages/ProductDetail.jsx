import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/useCart';
import './ProductDetail.css';

/**
 * Componente que muestra el detalle de un producto específico,
 * permite agregar el producto al carrito de compras.
 *
 * @component
 * @returns {JSX.Element} Detalle del producto o mensajes de carga/error
 */
function ProductDetail() {
    const { id } = useParams();
    const { addToCart } = useCart();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    // Efecto para cargar los datos del producto desde la API
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error al cargar el producto:', err);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <p className="product-detail__loading">Cargando producto...</p>;
    if (!product) return <p className="product-detail__not-found">Producto no encontrado.</p>;

    return (
        <div className="product-detail">
            <img className="product-detail__image" src={product.image} alt={product.title} />
            <div className="product-detail__info">
                <h2 className="product-detail__title">{product.title}</h2>
                <p className="product-detail__price">${product.price}</p>
                <p className="product-detail__category">Categoría: {product.category}</p>
                <p className="product-detail__description">{product.description}</p>
                <p className="product-detail__rating">
                    ⭐ {product.rating?.rate} ({product.rating?.count} reseñas)
                </p>
                <button className="product-detail__button" onClick={() => addToCart(product)}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
}

export default ProductDetail;
