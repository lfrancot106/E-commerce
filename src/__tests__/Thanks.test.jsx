/* global expect, describe, test */
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Thanks from '../pages/Thanks';

describe('Thanks', () => {
    test('renderiza mensaje de agradecimiento y botón', () => {
        render(
            <BrowserRouter>
                <Thanks />
            </BrowserRouter>
        );

        expect(screen.getByText('¡Gracias por tu compra! 🎉')).toBeInTheDocument();
        expect(screen.getByText('Esperamos verte de nuevo pronto.')).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /volver a la tienda/i })).toBeInTheDocument();
    });
});
