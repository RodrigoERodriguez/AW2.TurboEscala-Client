import axios from 'axios';

const pedidoService = {
    async buscarPedido(codigoPedido, email, dni) {
        try {
            const response = await axios.get('http://localhost:5000/api/pedidos/mispedidos', {
                params: {
                    id: codigoPedido,
                    email,
                    dni,
                },
            });
            return response.data;
        } catch (error) {
            console.error(`Error al buscar el pedido: ${error.message}`);
            throw new Error(`Error al buscar el pedido: ${error.message}`);
        }
    },
    
    async crearPedido(pedido) {
        try {
            const referenciaPedido = await axios.post(`http://localhost:5000/api/pedidos/checkout`, pedido);
            return referenciaPedido.data;
        } catch (error) {
            throw new Error(`Error al crear el pedido: ${error.message}`);
        }
    },
};

export default pedidoService;
