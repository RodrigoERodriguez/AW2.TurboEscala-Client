import { collection, getDocs, query, where } from "firebase/firestore";
import { baseDeDatos } from "../../../FireBase/config";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

    const [productos , setproductos] = useState([]);
    const [titulo] = useState("Productos");
    const categoria = useParams().categoria;

    useEffect(() => {
        const productosBaseDeDatos = collection( baseDeDatos, "Productos" ); 
        const filtroCategoria = categoria ? query(productosBaseDeDatos, where("categoria", "==", categoria)) : productosBaseDeDatos;

        getDocs(filtroCategoria)
            .then((respuesta) => {

                setproductos(
                    respuesta.docs.map((doc) => {
                        return { ...doc.data(), id: doc.id}
                    })
                )

            })

    }, [categoria])
    

    return (
        <div>
            <ItemList productos = {productos} titulo={titulo}/>
        </div>
    )
}

export default ItemListContainer