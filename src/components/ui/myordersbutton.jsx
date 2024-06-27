import { Link } from "react-router-dom";

const MyOrdersButton = () => {

    return (
        <Link to="/pedidos/mispedidos" className="mr-4 bg-gray-700 text-white text-bold px-4 py-2 rounded-full">Mis Pedidos</Link>
    );

};

export default MyOrdersButton;