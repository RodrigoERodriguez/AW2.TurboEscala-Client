import { useContext, useState } from "react";
import ItemCount from "../../components/ui/ItemCount"
import PropTypes from "prop-types";
import { CartContext } from "../../context/cartcontext";


const ItemDetail = ( {item} ) => {

    const {agregarAlCarrito} = useContext(CartContext);

    const [cantidad, setCantidad] = useState(1);

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1) 
    }

    const handleSumar = () => {
        cantidad < item.stock && setCantidad(cantidad + 1)  
    }

    return (
        <div className="flex flex-row">

            <div className="ml-10 mt-10 w-3/4 flex">

                <img className="w-[640px] h-[480px] mb-2" src={item.image} alt={item.nameProduct}/>

                <div className="flex flex-col">
                    <h3 className="text-3xl ml-10 font-bold">{item.nameProduct}</h3>

                    <div className="flex flex-row">
                        <div className="ml-10 mt-10 bg-gray-100 rounded w-60 font-bold">
                            <p className="ml-5">Cod:</p>
                            <p className="ml-5">{item.id}</p>
                        </div>
                        
                        <div className="ml-10 mt-10 bg-gray-100 rounded w-60 font-bold">
                            <p className="ml-10">Stock</p>
                            <p className="ml-10">Disponible: {item.stock}</p>
                        </div>
                    </div>
                    
                    <div className="ml-10 mt-10 bg-gray-100 rounded w-600 font-bold">
                        <p>
                            Medios de Pagos y Cuotas
                        </p>
                    </div>

                    <p className="ml-10 mt-10 bg-gray-100 rounded w-600 font-bold">{item.description}</p>
                </div>
                
            </div>

            <div className="ml-10 mr-10 mt-10 w-1/4">

                <div className="mb-4 bg-gray-100 rounded w-600 font-bold">
                    <p className="ml-2 font-bold text-2xl">${item.price}</p>
                    <p className="ml-2 text-medium mt-2">Descuento exclusivo pagando en efectivo, transferencia o QR</p>
                </div>

                <div className="mb-4 bg-gray-100 rounded w-600 h-20 font-bold">
                    <p className="ml-2 text-medium mb-2">Cantidad</p>

                    <ItemCount
                        cantidad={cantidad}
                        handleSumar={handleSumar} 
                        handleRestar={handleRestar} 
                    />
                </div>

                <button 
                    className="bg-red-500 mr-36 text-white p-2 rounded-full font-bold w-600"
                    onClick={() => agregarAlCarrito(item, cantidad)}
                >
                    Agregar al carrito
                </button>
            </div>

        </div>
    )
}

ItemDetail.propTypes = {
    item: PropTypes.shape({
        image: PropTypes.string.isRequired,
        nameProduct: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        categoria: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        stock: PropTypes.number.isRequired
    }).isRequired
};

export default ItemDetail;