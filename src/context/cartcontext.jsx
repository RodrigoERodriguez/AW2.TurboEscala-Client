import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Swal from "sweetalert2";

export const CartContext = createContext();

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({children}) =>{

    const [carrito, setCarrito] = useState(carritoInicial);

    const agregarAlCarrito = (item, cantidad) => {

        if(item.stock < cantidad){
            Swal.fire(
                "Error",
                "No hay suficiente stock disponible",
                "error"
            );

            return;
        }

        const itemAgregado = {...item, cantidad};

        const nuevoCarrito = [...carrito];
        const estaEnElCarrito = nuevoCarrito.find((producto) => producto.id === itemAgregado.id);

        Swal.fire(
            "Producto agregado con exito!",
            "El producto fue agregado a tu carrito!",
            "success"
        );

        if (estaEnElCarrito){
            estaEnElCarrito.cantidad += cantidad;
        }else{
            nuevoCarrito.push(itemAgregado);
        }
        
        item.stock -= cantidad;
        setCarrito(nuevoCarrito);
    }
    
    const cantidadEnCarrito = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
    }

    const precioTotal = () => {
        return carrito.reduce((acc, prod) => acc + (prod.price * prod.cantidad), 0);
    }

    const eliminarProducto = (id) => {
        setCarrito(carrito.filter((prod) => prod.id !== id))
    }

    const vaciarCarrito = () => {
        setCarrito([]);
    }

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito));
    },[carrito]);

    return (
        <CartContext.Provider value={ {carrito,agregarAlCarrito, cantidadEnCarrito, precioTotal, vaciarCarrito, eliminarProducto} }>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;

CartProvider.propTypes = {
    children: PropTypes.node.isRequired
};