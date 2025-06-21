/* global expect, describe, it */

import { render, screen } from '@testing-library/react';
import ProductDetail from '../pages/ProductDetail';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

describe('ProductDetail', () => {
    it('muestra el mensaje de carga al iniciar', () => {
        render(
            <CartContext.Provider value={{ addToCart: () => { } }}>
                <MemoryRouter initialEntries={['/product/1']}>
                    <Routes>
                        <Route path="/product/:id" element={<ProductDetail />} />
                    </Routes>
                </MemoryRouter>
            </CartContext.Provider>
        );

        expect(screen.getByText(/Cargando producto.../i)).toBeInTheDocument();
    });
});
