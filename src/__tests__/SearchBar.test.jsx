import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../components/SearchBar';
import { describe, it, expect, vi } from 'vitest';


describe('SearchBar', () => {
    it('renderiza el input correctamente', () => {
        render(<SearchBar value="" onChange={() => { }} />);
        const input = screen.getByPlaceholderText('Buscar productos...');
        expect(input).toBeInTheDocument();
    });

    it('llama a onChange con el valor correcto', () => {
        const handleChange = vi.fn(); // vi.fn() viene de Vitest
        render(<SearchBar value="" onChange={handleChange} />);
        const input = screen.getByPlaceholderText('Buscar productos...');
        
        fireEvent.change(input, { target: { value: 'camisa' } });

        expect(handleChange).toHaveBeenCalledWith('camisa');
    });
});
