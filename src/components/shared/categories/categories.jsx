import { Link } from "react-router-dom";

const Categories = () => {

    return (
        <ul className="flex text-sm justify-center items-center space-x-4 w-full font-bold">
        <li><Link to="/productos/Camiones">Camiones</Link></li>
        <li><Link to="/productos/Camionetas">Camionetas</Link></li>
        <li><Link to="/productos/Autos">Autos</Link></li>
        <li><Link to="/productos/Accesorios">Accesorios</Link></li>
    </ul>
    );

};

export default Categories;