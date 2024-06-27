import { useState } from 'react';
import PropTypes from 'prop-types';
import { updateProducto } from '../../../services/Productos';
import { Link } from 'react-router-dom';

const Item = ({ producto, editable, onInputChange }) => {
    const [editing, setEditing] = useState(false);
    const [editedName, setEditedName] = useState(producto.nameProduct);
    const [editedPrice, setEditedPrice] = useState(String(producto.price));
    const [editedStock, setEditedStock] = useState(String(producto.stock));

    const handleEditToggle = () => {
        setEditing(!editing);
        // Reiniciar los valores editados cuando se cancela la edición
        if (!editing) {
            setEditedName(producto.nameProduct);
            setEditedPrice(String(producto.price));
            setEditedStock(String(producto.stock));
        }
    };

    const handleInputChangeInternal = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case 'editedName':
                setEditedName(value.replace(/[^a-zA-Z0-9 ]/g, ''));
                break;
            case 'editedPrice':
                setEditedPrice(value.replace(/[^0-9]/g, ''));
                break;
            case 'editedStock':
                setEditedStock(value.replace(/[^0-9]/g, ''));
                break;
            default:
                break;
        }
    };

    const handleSaveChanges = async () => {
        try {
            const productoData = {
                id: producto.id,
                nameProduct: editedName,
                price: Number(editedPrice),
                stock: Number(editedStock)
            };

            await updateProducto(productoData.id, productoData);
            setEditing(false);

            if (typeof onInputChange === 'function') {
                onInputChange(producto.id, 'nameProduct', editedName);
                onInputChange(producto.id, 'price', Number(editedPrice));
                onInputChange(producto.id, 'stock', Number(editedStock));
            }
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    return (
        <div className="flex mt-5">
            <img src={producto.image} className="w-[260px] h-[260px]" alt={producto.nameProduct} />
            <div className="card-body">
                {editing ? (
                    <div>
                        <div className="grid grid-cols-1 gap-y-2">
                            <input
                                type="text"
                                name="editedName"
                                value={editedName}
                                onChange={handleInputChangeInternal}
                                className="border border-black rounded-md px-3 py-2 focus:outline-none focus:border-green-200"
                                placeholder="Nombre del producto"
                            />
                            <input
                                type="text"
                                name="editedPrice"
                                value={editedPrice}
                                onChange={handleInputChangeInternal}
                                className="border border-black rounded-md px-3 py-2 focus:outline-none focus:border-green-200"
                                placeholder="Precio"
                            />
                            <input
                                type="text"
                                name="editedStock"
                                value={editedStock}
                                onChange={handleInputChangeInternal}
                                className="border border-black rounded-md px-3 py-2 focus:outline-none focus:border-green-200"
                                placeholder="Stock"
                            />
                        </div>
                        <div className="mt-3">
                            <button className="mr-4 bg-green-500 text-black font-bold px-4 py-2 rounded-full hover:bg-green-400" onClick={handleSaveChanges}>
                                Guardar
                            </button>
                            <button className="bg-red-500 text-black font-bold px-4 py-2 rounded-full hover:bg-red-400" onClick={handleEditToggle}>
                                Cancelar
                            </button>
                        </div>
                    </div>
                ) : (
                    <div>
                        <p className='font-bold ml-2'>{producto.nameProduct}</p>
                        <p className='font-bold ml-2'>{producto.categoria}</p>
                        <p className='font-bold ml-2'>${producto.price}</p>
                        <p className='font-bold ml-2'>{producto.stock} unidades</p>
                        {editable ? (
                            <button className='mr-4 bg-black text-white font-bold px-4 py-2 rounded-full hover:bg-gray-600' onClick={handleEditToggle}>Editar</button>
                        ) : (
                            <Link className='ml-6 bg-black text-white font-bold px-2 py-1 rounded-full' to={`/productos/item/${producto.id}`}>Ver Más</Link>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

Item.propTypes = {
    producto: PropTypes.shape({
        id: PropTypes.string.isRequired,
        nameProduct: PropTypes.string.isRequired,
        categoria: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        stock: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
    editable: PropTypes.bool,
    onInputChange: PropTypes.func
};

Item.defaultProps = {
    editable: false,
    onInputChange: () => {}
};

export default Item;
