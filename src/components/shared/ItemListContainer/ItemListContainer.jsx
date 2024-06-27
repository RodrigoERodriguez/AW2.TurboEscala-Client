import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getProductosByCategoria, getProductos } from "../../../services/Productos";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const { categoria } = useParams();

    useEffect(() => {
        const fetchProductos = async () => {
            try {
                let productosData;
                if (categoria) {
                    productosData = await getProductosByCategoria(categoria);
                } else {
                    productosData = await getProductos();
                }
                setProductos(productosData);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProductos();
    }, [categoria]);

    return (
        <div>
            <ItemList productos={productos}/>
        </div>
    );
};

export default ItemListContainer;
