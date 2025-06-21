import { useState, useEffect } from "react";
import { CartContext } from "./CartContext";

/**
 * Obtiene el carrito inicial desde localStorage, o un arreglo vacío si no existe.
 * @returns {Array} Lista de productos en el carrito
 */
const getInitialCart = () => {
    try {
        const storedCart = localStorage.getItem("cartItems");
        return storedCart ? JSON.parse(storedCart) : [];
    } catch {
        return [];
    }
};

/**
 * Proveedor de contexto para el carrito de compras.
 * Proporciona estado y funciones para manipular el carrito.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Componentes hijos que consumen el contexto
 * @returns {JSX.Element} Provider con valores y funciones para el carrito
 */
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(getInitialCart);

    // Guarda el carrito en localStorage cada vez que cambia el estado
    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    /**
     * Actualiza la cantidad de un producto en el carrito sumando delta.
     * Elimina el producto si la cantidad es 0 o menor.
     *
     * @param {string|number} productId - ID del producto
     * @param {number} delta - Valor para sumar o restar a la cantidad
     */
    const updateQuantity = (productId, delta) => {
        setCartItems((prev) =>
            prev
                .map((item) =>
                    item.id === productId
                        ? { ...item, quantity: item.quantity + delta }
                        : item
                )
                .filter((item) => item.quantity > 0)
        );
    };

    /**
     * Vacía el carrito.
     */
    const clearCart = () => {
        setCartItems([]);
    };

    /**
     * Añade un producto al carrito o aumenta su cantidad si ya existe.
     *
     * @param {Object} product - Producto a añadir
     * @param {string|number} product.id - ID único del producto
     */
    const addToCart = (product) => {
        if (!product || !product.id) return;

        setCartItems((prev) => {
            const exists = prev.find((item) => item.id === product.id);
            if (exists) {
                return prev.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prev, { ...product, quantity: 1 }];
        });
    };

    /**
     * Elimina un producto del carrito por su ID.
     *
     * @param {string|number} productId - ID del producto a eliminar
     */
    const removeFromCart = (productId) => {
        setCartItems((prev) => prev.filter((item) => item.id !== productId));
    };

    /**
     * Incrementa la cantidad de un producto en 1.
     *
     * @param {string|number} productId - ID del producto
     */
    const increaseQty = (productId) => updateQuantity(productId, 1);

    /**
     * Decrementa la cantidad de un producto en 1.
     *
     * @param {string|number} productId - ID del producto
     */
    const decreaseQty = (productId) => updateQuantity(productId, -1);

    /**
     * Calcula el total a pagar sumando precio por cantidad de cada producto.
     *
     * @returns {number} Total del carrito
     */
    const getTotal = () =>
        cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    /**
     * Obtiene el total de unidades de productos en el carrito.
     *
     * @returns {number} Cantidad total de productos
     */
    const getCartCount = () =>
        cartItems.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                increaseQty,
                decreaseQty,
                getTotal,
                getCartCount,
                clearCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
