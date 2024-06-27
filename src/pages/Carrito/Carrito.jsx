import { useContext } from 'react';
import { CartContext } from '../../context/cartcontext';
import { Link } from 'react-router-dom';

const Carrito = () => {
    const { carrito, precioTotal, eliminarProducto } = useContext(CartContext);

    return (
        <div>
            <h1 className='text-5xl ml-10 mt-10 text-left'>Carrito</h1>
            
            {carrito.length > 0 ? (
                <div className='flex'>
                    <div className='ml-10 mt-10 bg-gray-100 rounded w-[1020px]'>
                        <div className='ml-10'>
                            <div className='flex justify-between mb-4'>
                                <p className='text-lg font-bold w-1/3'>Producto</p>
                                <p className='text-lg font-bold w-1/6'>Precio</p>
                                <p className='text-lg font-bold w-1/6'>Cantidad</p>
                                <p className='text-lg font-bold w-1/6'>Subtotal</p>
                                <p className='w-1/6'></p>
                            </div>

                            {carrito.map((prod) => (
                                <div className='flex items-center justify-between mb-4' key={prod.id}> 

                                    <div className='w-1/3'>
                                        <div className='flex items-center'>
                                            <div className='flex flex-col mr-4'>
                                                <h3 className='text-xl font-bold'>{prod.nameProduct}</h3>
                                                <img className='w-[120px] h-[100px] mb-2' src={prod.image} alt={prod.nameProduct} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='w-1/6'>
                                        <p className='text-medium font-bold'>${prod.price}</p>
                                    </div>

                                    <div className='w-1/6'>
                                        <p className='text-medium font-bold'>{prod.cantidad}</p>
                                    </div>

                                    <div className='w-1/6'>
                                        <p className='text-medium font-bold'>${prod.price * prod.cantidad}</p>
                                    </div>

                                    <button className='bg-red-500 mr-36 text-white p-2 rounded' onClick={() => eliminarProducto(prod.id)}>X</button>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='ml-10 mt-10 bg-gray-100 rounded w-[520px] h-52 flex flex-col items-center justify-center'>
                        <h2 className='mb-10 text-xl font-bold ml-5'>Precio total: ${precioTotal()}</h2>
                        <Link className='ml-5 mr-5 bg-red-500 text-white p-2 rounded' to="/pedidos/checkout">Finalizar Compra</Link>
                    </div>
                </div>
            ) : (
                <div className="flex justify-center mt-10">
                    <h2 className='text-5xl ml-10 mt-10 text-center'>El carrito está vacío</h2>
                </div>
            )}
        </div>
    );
};

export default Carrito;