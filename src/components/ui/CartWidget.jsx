import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartcontext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
    const { cantidadEnCarrito } = useContext(CartContext);

    return (
        <div>
            <Link to="/carrito" className="flex items-center">
                <span className="mr-4">{cantidadEnCarrito()}</span>
                <FontAwesomeIcon className='mr-4' icon={faCartShopping} />
            </Link>
        </div>
    );
}

export default CartWidget;