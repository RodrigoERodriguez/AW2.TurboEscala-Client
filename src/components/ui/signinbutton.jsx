import { Link } from "react-router-dom";

const SigInButton = () => {

    return (
        <Link to="/api/auth" className='mr-4 bg-black text-white text-bold px-4 py-2 rounded-full'>Iniciar Sesión</Link>
    );

};

export default SigInButton;