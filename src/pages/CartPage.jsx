import { useCart } from '../context/useCart';
import './CartPage.css';
import { Link } from 'react-router-dom';

/**
 * Página del carrito de compras que muestra los productos agregados,
 * permite modificar cantidades, eliminar productos y ver el total.
 *
 * @component
 * @returns {JSX.Element} Componente de la página del carrito
 */
const CartPage = () => {
    // Extraemos funciones y estado del carrito desde el contexto
    const {
        cartItems,
        increaseQty,
        decreaseQty,
        removeFromCart,
        getTotal,
    } = useCart();

    return (
        <section className="cart">
            <h2 className="cart__title">🛒 Tu Carrito</h2>

            {/* Mostrar mensaje si el carrito está vacío */}
            {cartItems.length === 0 ? (
                <p className="cart__empty">Tu carrito está vacío.</p>
            ) : (
                <>
                    {/* Listado de productos en el carrito */}
                    <div className="cart__items">
                        {cartItems.map((item) => (
                            <div key={item.id} className="cart__item">
                                <img
                                    className="cart__item-image"
                                    src={item.image}
                                    alt={item.title}
                                />
                                <div className="cart__item-info">
                                    <h4 className="cart__item-title">{item.title}</h4>
                                    <p className="cart__item-price">
                                        Precio: ${item.price.toFixed(2)}
                                    </p>
                                    <div className="cart__qty-controls">
                                        {/* Botón para disminuir cantidad */}
                                        <button onClick={() => decreaseQty(item.id)}>-</button>
                                        <span>{item.quantity}</span>
                                        {/* Botón para aumentar cantidad */}
                                        <button onClick={() => increaseQty(item.id)}>+</button>
                                    </div>
                                    {/* Botón para eliminar producto del carrito */}
                                    <button
                                        className="cart__remove-btn"
                                        onClick={() => removeFromCart(item.id)}
                                    >
                                        Eliminar
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Resumen con total y botón para ir al checkout */}
                    <div className="cart__summary">
                        <h3 className="cart__total">Total: ${getTotal().toFixed(2)}</h3>
                        <Link to="/checkout">
                            <button className="cart__checkout-btn">
                                Ir al resumen de pago
                            </button>
                        </Link>
                    </div>
                </>
            )}
        </section>
    );
};

export default CartPage;
