import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./BackButton.css";

/**
 * Componente BackButton que muestra un botón para regresar a la página anterior.
 * No se muestra en la página principal ("/") ni en la página de agradecimiento ("/thanks").
 *
 * @component
 * @returns {JSX.Element|null} Botón de volver o null si no debe mostrarse.
 */
const BackButton = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // No mostrar el botón si estamos en la página principal o en la de gracias
    if (location.pathname === "/" || location.pathname === "/thanks") return null;

    return (
        <div className="back-button">
            <button className="back-button__btn" onClick={() => navigate(-1)}>
                ⬅ Volver
            </button>
        </div>
    );
};

export default BackButton;
