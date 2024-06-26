import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // URL de tu servidor Express

// Función para obtener todos los productos
const getProductos = async () => {
    try {
        const response = await axios.get(`${API_URL}/productos`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener productos:', error);
        throw error; // Puedes manejar el error según tus necesidades
    }
};

// Función para obtener un producto por ID
const getProductoById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/productos/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error al obtener producto con ID ${id}:`, error);
        throw error;
    }
};

// Función para obtener productos por categoría
const getProductosByCategoria = async (categoria) => {
    try {
        const response = await axios.get(`${API_URL}/productos?categoria=${categoria}`);
        return response.data;
    } catch (error) {
        console.error(`Error al obtener productos de la categoría ${categoria}:`, error);
        throw error;
    }
};


// Función para crear un nuevo producto
const createProducto = async (productoData) => {
    try {
        const response = await axios.post(`${API_URL}/productos`, productoData);
        return response.data;
    } catch (error) {
        console.error('Error al crear producto:', error);
        throw error;
    }
};

// Función para actualizar un producto por ID
const updateProducto = async (id, productoData) => {
    try {
        const response = await axios.put(`${API_URL}/productos/${id}`, productoData);
        return response.data;
    } catch (error) {
        console.error(`Error al actualizar producto con ID ${id}:`, error);
        throw error;
    }
};

// Función para eliminar un producto por ID
const deleteProducto = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/productos/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error al eliminar producto con ID ${id}:`, error);
        throw error;
    }
};

export { getProductos, getProductoById, getProductosByCategoria, createProducto, updateProducto, deleteProducto };
