import { useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { pedidos } from '../../FireBase/config';

const Pedidos = () => {
    const [codigoPedido, setCodigoPedido] = useState('');
    const [email, setEmail] = useState('');
    const [dni, setDni] = useState('');
    const [item, setItem] = useState(null);
    const [error, setError] = useState('');

    const handleBuscarClick = async () => {
        if (codigoPedido.trim() === '' || email.trim() === '' || dni.trim() === '') {
            setError('Por favor, ingresa un código de pedido, email y DNI para buscar');
            return;
        }

        setError('');
        
        const pedidoRef = doc(pedidos, 'PedidosDeCompra', codigoPedido);

        try {
            const pedidoSnapshot = await getDoc(pedidoRef);
            if (pedidoSnapshot.exists()) {
                const pedidoData = pedidoSnapshot.data();
                if (pedidoData.email === email && pedidoData.dni === dni) {
                    setItem({ ...pedidoData, id: pedidoSnapshot.id });
                } else {
                    setItem(null);
                    setError('El código de pedido, email o DNI ingresados no coinciden con ningún pedido.');
                }
            } else {
                setItem(null);
                setError('El pedido ingresado no existe.');
            }
        } catch (error) {
            console.error('Error al buscar el pedido:', error);
            setError('Error al buscar el pedido. Por favor, intenta nuevamente.');
            setItem(null);
        }
    };

    return (
        <div className="container mx-auto px-4">
            <h1 className="main-title text-5xl pt-10 text-center">Mis Pedidos</h1>
            <p className="text-2xl pt-5 text-center">Ingresa el código de tu pedido, email y DNI</p>
            <div className="flex mt-5">
                <div className="w-1/3 pr-4">
                    <div className="flex flex-col items-center">
                        <p className="text-xl">Código de Pedido</p>
                        <input
                            className="p-1 w-full text-black font-bold border-2 border-black rounded mb-4"
                            type="text"
                            placeholder="Código sin #"
                            value={codigoPedido}
                            onChange={(e) => setCodigoPedido(e.target.value)}
                        />

                        <p className="text-xl">Email</p>
                        <input
                            className="p-1 w-full text-black font-bold border-2 border-black rounded mb-4"
                            type="text"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <p className="text-xl">DNI</p>
                        <input
                            className="p-1 w-full text-black font-bold border-2 border-black rounded mb-4"
                            type="text"
                            placeholder="DNI"
                            value={dni}
                            onChange={(e) => setDni(e.target.value)}
                        />

                        <button className="enviar bg-red-600 rounded text-white font-medium w-full p-2 mt-5" type="submit" onClick={handleBuscarClick}>
                            Buscar
                        </button>
                    </div>

                    {error && <p className="error-message mt-4 text-red-500">{error}</p>}
                </div>

                <div className="w-2/3 pl-4">
                    {item && (
                        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                            <h2 className="text-2xl mb-4">Detalles del Pedido:</h2>
                            <p className="mb-2"><strong>Estado:</strong> {item.estado}</p>
                            <p className="mb-2"><strong>Fecha:</strong> {item.fecha.toDate().toLocaleDateString()}</p>
                            <p className="mb-2"><strong>Cantidad de productos:</strong> {Object.keys(item.productos).length}</p>
                            <p className="mb-4"><strong>Monto total:</strong> {item.total}</p>
                        
                            <h3 className="text-xl mb-2">Productos:</h3>
                            <ul className="list-disc pl-5">
                                {Object.entries(item.productos).map(([key, producto]) => (
                                    <li key={key}>
                                        {producto.nameProduct} - Cantidad: {producto.cantidad} - Precio: {producto.price}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Pedidos;