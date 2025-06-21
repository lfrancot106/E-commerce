/* global expect, describe, it */
import { render, screen } from "@testing-library/react";
import Checkout from "../pages/Checkout";
import { CartContext } from "../context/CartContext";
import { MemoryRouter } from "react-router-dom";

describe("Checkout", () => {
    it("muestra mensaje si el carrito está vacío", () => {
        render(
            <CartContext.Provider value={{ cartItems: [], getTotal: () => 0 }}>
                <MemoryRouter>
                    <Checkout />
                </MemoryRouter>
            </CartContext.Provider>
        );

        expect(screen.getByText(/tu carrito está vacío/i)).toBeInTheDocument();
    });

    it("muestra productos en el resumen", () => {
        const cartItems = [
            { id: 1, title: "Producto 1", price: 10, quantity: 2 },
            { id: 2, title: "Producto 2", price: 5, quantity: 1 },
        ];

        render(
            <CartContext.Provider value={{ cartItems, getTotal: () => 25 }}>
                <MemoryRouter>
                    <Checkout />
                </MemoryRouter>
            </CartContext.Provider>
        );

        expect(screen.getByText(/Producto 1/)).toBeInTheDocument();
        expect(screen.getByText(/Producto 2/)).toBeInTheDocument();
        expect(screen.getByText("Total: $25.00")).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /ir a pago/i })).toBeInTheDocument();
    });
});
