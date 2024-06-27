import { useEffect, useState } from "react";
import ItemDetail from "../../../pages/ItemDetail/ItemDetail";
import { Link, useParams } from "react-router-dom";
import { getProductos } from "../../../services/Productos";

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const [error, setError] = useState(null);
    const { id } = useParams(); // Obtener el id desde React Router

    useEffect(() => {
        const fetchProducto = async () => {
            try {
                const producto = await getProductos(id);
                if (producto) {
                    setItem(producto);
                } else {
                    setError("El producto ingresado no existe o no se encuentra disponible. Prueba buscando en nuestro ");
                }
            } catch (error) {
                console.error('Error fetching product:', error);
                setError("Error al cargar el producto. Por favor, inténtalo de nuevo más tarde.");
            }
        };

        if (id) {
            fetchProducto();
        }
    }, [id]);

    return (
        <div>
            {error ? (
                <div>
                    <p className="font-bold text-center mt-20 text-xl">{error}<Link className="text-red-500" to="/productos">Catálogo</Link></p>
                </div>
            ) : (
                item && <ItemDetail id={id} item={item} />
            )}
        </div>
    );
};

export default ItemDetailContainer;
