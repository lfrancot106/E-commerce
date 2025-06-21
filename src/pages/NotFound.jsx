import './NotFound.css';

/**
 * Componente que muestra un mensaje de error 404 cuando la ruta no existe.
 *
 * @component
 * @returns {JSX.Element} Componente para página de error 404 (No encontrada)
 */
const NotFound = () => {
    return (
        <section className="not-found">
            <h2 className="not-found__title">404 - Página no encontrada</h2>
            <p className="not-found__message">
                Lo sentimos, la página que buscas no existe o fue movida.
            </p>
        </section>
    );
};

export default NotFound;
