import { doc, getDoc } from "firebase/firestore";
import { baseDeDatos } from "../../../FireBase/config";
import { useEffect, useState } from "react";
import ItemDetail from "../../../pages/ItemDetail/ItemDetail";
import { Link, useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const [error, setError] = useState();
    const id = useParams().id;

    useEffect(() => {
        const productoBaseDeDato = doc(baseDeDatos, "Productos", id);

        getDoc(productoBaseDeDato)
            .then((respuesta) => {
                if (respuesta.exists()) {
                    setItem({ ...respuesta.data(), id: respuesta.id });
                } else {
                    setError("El producto ingresado no existe o no se encuenta disponible. Prueba buscando en nuestro");
                }
            })
    }, [id]);

    return (
        <div>
            {error ? (
                <div>
                    <p className="font-bold text-center mt-20 text-xl" >{error} <Link className="text-red-500"  to="/productos">Catalogo</Link></p>
                </div>
            ) : (
                item && <ItemDetail item={item} />
            )}
        </div>
    );
};

export default ItemDetailContainer;
