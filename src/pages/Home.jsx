import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import './Home.css';

/**
 * Componente principal que muestra el catálogo de productos,
 * incluye barra de búsqueda para filtrar productos por título
 * y muestra un estado de carga mientras se obtienen los datos.
 *
 * @component
 * @returns {JSX.Element} Componente Home con listado y búsqueda de productos
 */
function Home() {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    // Efecto que carga los productos al montar el componente
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setIsLoading(false);
            })
            .catch((err) => {
                console.error('Error fetching products:', err);
                setIsLoading(false);
            });
    }, []);

    // Filtra productos que contienen el término de búsqueda (case-insensitive)
    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <section className="home">
            <h1 className="home__title">Catálogo de productos</h1>

            {/* Barra de búsqueda controlada */}
            <SearchBar value={searchTerm} onChange={setSearchTerm} />

            {/* Mostrar estado de carga o listado de productos filtrados */}
            {isLoading ? (
                <div className="home__loading">
                    <p className="home__loading-text">Cargando productos...</p>
                </div>
            ) : (
                <div className="home__product-grid">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    ) : (
                        <p className="home__no-results">No se encontraron productos.</p>
                    )}
                </div>
            )}
        </section>
    );
}

export default Home;
