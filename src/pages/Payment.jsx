import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/useCart";
import "./Payment.css";

/**
 * Componente que renderiza el formulario de pago y maneja la validación
 * de los datos ingresados. Si el carrito está vacío, muestra un mensaje.
 *
 * @component
 * @returns {JSX.Element} Componente Payment con formulario y validaciones
 */
const Payment = () => {
    const { clearCart, cartItems } = useCart();
    const navigate = useNavigate();

    /** 
     * Estado para almacenar los datos del formulario de pago 
     * @type {{name: string, address: string, cardNumber: string, expiration: string, cvv: string}}
     */
    const [form, setForm] = useState({
        name: "",
        address: "",
        cardNumber: "",
        expiration: "",
        cvv: "",
    });

    /**
     * Estado para manejar errores de validación del formulario
     * @type {Object.<string, string>}
     */
    const [errors, setErrors] = useState({});

    /**
     * Valida el formulario, actualizando el estado de errores
     * @returns {boolean} Retorna true si el formulario es válido
     */
    const validate = () => {
        const newErrors = {};

        if (!form.name.trim()) newErrors.name = "El nombre es obligatorio";
        if (!form.address.trim()) newErrors.address = "La dirección es obligatoria";

        if (!form.cardNumber.trim()) {
            newErrors.cardNumber = "Número de tarjeta obligatorio";
        } else if (!/^\d{16}$/.test(form.cardNumber)) {
            newErrors.cardNumber = "Debe tener 16 dígitos";
        }

        if (!form.expiration.trim()) {
            newErrors.expiration = "Fecha de expiración obligatoria";
        } else if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(form.expiration)) {
            newErrors.expiration = "Formato inválido (MM/AA)";
        }

        if (!form.cvv.trim()) {
            newErrors.cvv = "CVV obligatorio";
        } else if (!/^\d{3,4}$/.test(form.cvv)) {
            newErrors.cvv = "CVV inválido";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    /**
     * Manejador para actualizar el estado del formulario y limpiar errores específicos
     * @param {React.ChangeEvent<HTMLInputElement>} e Evento de cambio en input
     */
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    /**
     * Manejador para el submit del formulario. Valida, limpia carrito y navega a /thanks
     * @param {React.FormEvent<HTMLFormElement>} e Evento submit del formulario
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;

        clearCart();
        navigate("/thanks");
    };

    if (cartItems.length === 0) {
        return <p className="payment__empty">Tu carrito está vacío. No puedes proceder al pago.</p>;
    }

    return (
        <div className="payment">
            <h1 className="payment__title">Información de Pago</h1>
            <form onSubmit={handleSubmit} className="payment__form">
                <div className="payment__field">
                    <label className="payment__label">Nombre completo:</label>
                    <input
                        className="payment__input"
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                    />
                    {errors.name && <span className="payment__error">{errors.name}</span>}
                </div>

                <div className="payment__field">
                    <label className="payment__label">Dirección:</label>
                    <input
                        className="payment__input"
                        type="text"
                        name="address"
                        value={form.address}
                        onChange={handleChange}
                    />
                    {errors.address && <span className="payment__error">{errors.address}</span>}
                </div>

                <div className="payment__field">
                    <label className="payment__label">Número de tarjeta:</label>
                    <input
                        className="payment__input"
                        type="text"
                        name="cardNumber"
                        value={form.cardNumber}
                        onChange={handleChange}
                        placeholder="Ej: 1234123412341234"
                        maxLength={16}
                    />
                    {errors.cardNumber && <span className="payment__error">{errors.cardNumber}</span>}
                </div>

                <div className="payment__field">
                    <label className="payment__label">Fecha de expiración (MM/AA):</label>
                    <input
                        className="payment__input"
                        type="text"
                        name="expiration"
                        value={form.expiration}
                        onChange={handleChange}
                        placeholder="MM/AA"
                        maxLength={5}
                    />
                    {errors.expiration && <span className="payment__error">{errors.expiration}</span>}
                </div>

                <div className="payment__field">
                    <label className="payment__label">CVV:</label>
                    <input
                        className="payment__input"
                        type="text"
                        name="cvv"
                        value={form.cvv}
                        onChange={handleChange}
                        maxLength={4}
                    />
                    {errors.cvv && <span className="payment__error">{errors.cvv}</span>}
                </div>

                <button type="submit" className="payment__button">
                    Confirmar compra
                </button>
            </form>
        </div>
    );
};

export default Payment;
