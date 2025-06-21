import './SearchBar.css';

/**
 * Componente SearchBar para búsqueda de productos.
 *
 * @component
 * @param {Object} props
 * @param {string} props.value - Valor actual del input de búsqueda
 * @param {function} props.onChange - Función que se ejecuta al cambiar el input, recibe el nuevo valor
 * @returns {JSX.Element} Barra de búsqueda con input controlado
 */
const SearchBar = ({ value, onChange }) => {
    return (
        <div className="search-bar">
            <input
                className="search-bar__input"
                type="text"
                placeholder="Buscar productos..."
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
};

export default SearchBar;
