import { useNavigate } from "react-router-dom";
import { useCart } from "../context/useCart";
import "./Checkout.css";

/**
 * Componente que muestra el resumen del pedido actual,
 * listando los productos en el carrito, sus cantidades y el total.
 * Permite avanzar a la página de pago.
 *
 * @component
 * @returns {JSX.Element} Componente de resumen del pedido (Checkout)
 */
const Checkout = () => {
    const { cartItems, getTotal } = useCart();
    const navigate = useNavigate();

    /**
     * Navega a la página de pago cuando el usuario hace clic en el botón.
     */
    const handleGoToPayment = () => {
        navigate("/payment");
    };

    return (
        <div className="checkout">
            <h1 className="checkout__title">Resumen de tu pedido</h1>

            {/* Mostrar mensaje si el carrito está vacío */}
            {cartItems.length === 0 ? (
                <p className="checkout__empty">Tu carrito está vacío.</p>
            ) : (
                <>
                    {/* Listado de productos en el carrito */}
                    <ul className="checkout__list">
                        {cartItems.map((item) => (
                            <li key={item.id} className="checkout__item">
                                <span className="checkout__item-title">{item.title}</span>
                                <span className="checkout__item-price">
                                    {item.quantity} x ${item.price.toFixed(2)}
                                </span>
                            </li>
                        ))}
                    </ul>

                    {/* Total a pagar */}
                    <h2 className="checkout__total">Total: ${getTotal().toFixed(2)}</h2>

                    {/* Botón para ir a la página de pago */}
                    <button className="checkout__button" onClick={handleGoToPayment}>
                        Ir a pago
                    </button>
                </>
            )}
        </div>
    );
};

export default Checkout;
