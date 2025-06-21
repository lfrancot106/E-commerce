import { Link } from "react-router-dom";
import "./Thanks.css";

/**
 * Componente que muestra un mensaje de agradecimiento tras la compra,
 * con un enlace para volver a la página principal.
 *
 * @component
 * @returns {JSX.Element} Mensaje de agradecimiento y botón de regreso
 */
const Thanks = () => {
    return (
        <div className="thanks">
            <h1 className="thanks__title">¡Gracias por tu compra! 🎉</h1>
            <p className="thanks__message">Esperamos verte de nuevo pronto.</p>
            <Link to="/" className="thanks__button">Volver a la tienda</Link>
        </div>
    );
};

export default Thanks;
