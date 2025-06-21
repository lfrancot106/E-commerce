import { useContext } from "react";
import { CartContext } from "./CartContext.js";

/**
 * Custom hook para acceder al contexto del carrito de compras.
 *
 * @returns {Object} Valores y funciones del carrito disponibles en CartContext
 */
export const useCart = () => useContext(CartContext);
