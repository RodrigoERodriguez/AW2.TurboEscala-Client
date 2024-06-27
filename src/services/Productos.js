import axios from 'axios';

export const getProductos = async () => {
    try {
        const response = await axios.get('http://localhost:5000/api/productos/');
        return response.data;
    } catch (error) {
        console.error('Error fetching productos:', error);
        throw error;
    }
};

export const updateProducto = async (id, productoData) => {
    try {
        const response = await axios.put(`http://localhost:5000/api/productos/${id}`, productoData);
        return response.data;
    } catch (error) {
        console.error(`Error updating producto with ID ${id}:`, error);
        throw error;
    }
};

export const getProductosByCategoria = async (categoria) => {
    try {
        const response = await axios.get(`http://localhost:5000/api/productos/categoria/${categoria}`);
        return response.data;
    } catch (error) {
        console.error(`Error al obtener productos de la categoría ${categoria}:`, error);
        throw error;
    }
};