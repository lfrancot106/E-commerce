import { render, screen, fireEvent } from "@testing-library/react";
import ProductCard from "../components/ProductCard";
import { CartContext } from "../context/CartContext";
import { MemoryRouter } from "react-router-dom";
import { describe, test, expect, vi } from 'vitest';


const mockProduct = {
    id: 1,
    title: "Test Product",
    price: 19.99,
    image: "https://via.placeholder.com/150",
};

describe("ProductCard", () => {
    test("renderiza el título, precio e imagen del producto", () => {
        render(
            <MemoryRouter>
                <CartContext.Provider value={{ addToCart: () => { } }}>
                    <ProductCard product={mockProduct} />
                </CartContext.Provider>
            </MemoryRouter>
        );

        expect(screen.getByText(/Test Product/i)).toBeInTheDocument();
        expect(screen.getByText(/\$19\.99/)).toBeInTheDocument();
        expect(screen.getByRole("img")).toHaveAttribute("src", mockProduct.image);
    });

    test("llama a addToCart al hacer clic en el botón", () => {
        const mockAddToCart = vi.fn();

        render(
            <MemoryRouter>
                <CartContext.Provider value={{ addToCart: mockAddToCart }}>
                    <ProductCard product={mockProduct} />
                </CartContext.Provider>
            </MemoryRouter>
        );

        const button = screen.getByText(/agregar/i);
        fireEvent.click(button);

        expect(mockAddToCart).toHaveBeenCalledWith(mockProduct);
    });
});
