import { Link } from "react-router-dom";

const FooterCategories = () => {

    return (
        <ul className="text-sm">
        <li><Link to="/productos/Camiones">Camiones</Link></li>
        <li><Link to="/productos/Camionetas">Camionetas</Link></li>
        <li><Link to="/productos/Autos">Autos</Link></li>
        <li><Link to="/productos/Accesorios">Accesorios</Link></li>
    </ul>
    );

};

export default FooterCategories;