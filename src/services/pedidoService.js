import axios from 'axios';

const baseURL = '/api/pedidos';

const pedidoService = {
    async buscarPedido(codigoPedido, email, dni) {
        try {
            const response = await axios.get(`${baseURL}/buscar`, {
                params: {
                    codigoPedido,
                    email,
                    dni,
                },
            });
            return response.data;
        } catch (error) {
            throw new Error(`Error al buscar el pedido: ${error.message}`);
        }
    },
};

export default pedidoService;