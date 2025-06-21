import './Footer.css';

/**
 * Componente Footer que muestra información de copyright
 * y enlaces a términos, política de privacidad y ayuda.
 *
 * @component
 * @returns {JSX.Element} Elemento footer con contenido y enlaces.
 */
const Footer = () => {
    return (
        <footer className="footer">
            <p className="footer__text">
                &copy; {new Date().getFullYear()} Grupo Éxito. Todos los derechos reservados.
            </p>
            <div className="footer__links">
                <a href="#" className="footer__link">Términos y condiciones</a>
                <a href="#" className="footer__link">Política de privacidad</a>
                <a href="#" className="footer__link">Ayuda</a>
            </div>
        </footer>
    );
};

export default Footer;
