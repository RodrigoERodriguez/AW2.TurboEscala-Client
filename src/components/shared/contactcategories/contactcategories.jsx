import { Link } from "react-router-dom";

const ContactCategories = () => {

    return (
        <ul className="text-sm">
            <li><Link to="/about">Sobre nosotros</Link></li>
            <li><Link to="/contact">Contacto</Link></li>
            <li><Link to="/terms">Términos y condiciones</Link></li>
            <li><Link to="/privacy">Política de privacidad</Link></li>
        </ul>
    );

};

export default ContactCategories;