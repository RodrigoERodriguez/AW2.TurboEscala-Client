import { useContext, useState } from 'react';
import { CartContext } from "../../context/cartcontext";
import { useForm } from "react-hook-form";
import { collection, addDoc } from 'firebase/firestore';
import { baseDeDatos } from "../../FireBase/config";

const CheckOut = () => {
    const [pedidoId, setPedidoId] = useState('');

    const { register, handleSubmit } = useForm();
    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const FechaPedido = new Date();

    const Compra = (data) => {

        const pedido = {
            estado: 'Generada',
            fecha: FechaPedido,
            cliente: data,
            productos: carrito,
            total: precioTotal(),
        };

        const referenciaPedido = collection(baseDeDatos, 'PedidosDeCompra');

        addDoc(referenciaPedido, pedido).then((doc) => {
            setPedidoId(doc.id);
            vaciarCarrito();
        });
    };

    if (pedidoId) {
        return (
            <div className="container">
                <h1 className="main-title">Gracias por tu compra</h1>
                <h2>Tu número de pedido es: {pedidoId}</h2>
            </div>
        );
    }

    return (
        <>
            <h1 className="main-title text-3xl text-center mb-20">Finalizar compra</h1>
            <div className="container w-3/4 mx-auto">
                <form className="formulario" onSubmit={handleSubmit(Compra)}>
                    <div className="datos-container flex flex-row justify-between">
            
                        <div className="tus-datos flex flex-col w-1/2 pr-5">
                            <h2 className='text-xl font-bold'>Tus Datos</h2>
                            <div>
                                <p className='text-medium font-bold mt-4'>Nombre</p>
                                <input type="text" placeholder="Nombre" {...register('nombre', { required: true })} className="p-1 border border-gray-300 rounded w-[400px]" />
                                <p className='text-medium font-bold '>Apellido</p>
                                <input type="text" placeholder="Apellido" {...register('apellido', { required: true })} className="p-1 border border-gray-300 rounded w-[400px]" />
                                <p className='text-medium font-bold '>Telefono</p>
                                <input type="tel" placeholder="Teléfono" {...register('telefono', { required: true })} className="p-1 border border-gray-300 rounded w-[400px]" />
                                <p className='text-medium font-bold '>Correo Electronico</p>
                                <input type="email" placeholder="Correo Electrónico" {...register('email', { required: true })} className="p-1 border border-gray-300 rounded w-[400px]" />
                                <p className='text-medium font-bold '>Dni</p>
                                <input type="text" placeholder="DNI" {...register('dni', { required: true })} className="p-1 border border-gray-300 rounded w-[400px] mb-4" />
                            </div>
                        </div>

                        <div className="tu-pedido w-1/2 pl-5">
                            <h2 className='text-xl font-bold'>Tu Pedido</h2>
                            <div>
                                {carrito.map((prod) => (
                                    <div key={prod.id} className="flex justify-between">
                                        <div>
                                            <p className='mt-3 font-bold'>Producto</p>
                                            <h3>{prod.nameProduct}</h3>
                                        </div>
                                        <div>
                                            <p className='mt-3 font-bold'>Cantidad</p>
                                            <p>{prod.cantidad}</p>
                                        </div>
                                        <div>
                                            <p className='mt-3 font-bold'>Total</p>
                                            <p>${prod.price * prod.cantidad}</p>
                                        </div>
                                    </div>
                                ))}
                                {carrito.length > 0 ? (
                                    <>
                                        <p className='mt-3 font-bold'>Total</p>
                                        <h3 className='mb-4'>${precioTotal()}</h3>
                                    </>
                                ) : (
                                    <h3>El carrito está vacío</h3>
                                )}
                                    <button className="enviar mr-5 bg-red-500 text-white p-2 rounded" type="submit">
                                        Confirmar Pedido
                                    </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default CheckOut;