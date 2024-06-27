import { useEffect, useState } from 'react';
import { updateProducto, getProductosByCategoriaForEmployeeView, getProductosForEmployeeView } from '../../services/Productos';
import Item from '../../components/shared/Item/Item';

const EmployeeView = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [categoria, setCategoria] = useState('');

    useEffect(() => {
        const fetchProductos = async () => {
            try {
                let productosList = [];
                if (categoria === '') {
                    productosList = await getProductosForEmployeeView();
                } else {
                    productosList = await getProductosByCategoriaForEmployeeView(categoria);
                }
                setItems(productosList);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching productos: ", error);
            }
        };

        fetchProductos();
    }, [categoria]);

    const handleInputChange = async (id, field, value) => {
        try {
            await updateProducto(id, { [field]: value });
            setItems(items.map(item =>
                item.id === id ? { ...item, [field]: value } : item
            ));
        } catch (error) {
            console.error("Error updating producto: ", error);
        }
    };

    if (loading) {
        return <div>Cargando...</div>;
    }

    return (
        <div>
            <div>
                <label htmlFor="categoria">Filtrar por categoría: </label>
                <select id="categoria" value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                    <option value="">Todos</option>
                    <option value="Camiones">Camiones</option>
                    <option value="Camionetas">Camionetas</option>
                    <option value="Autos">Autos</option>
                    <option value="Accesorios">Accesorios</option>
                </select>
            </div>
            <div className="ml-10 grid grid-cols-3 gap-4 mt-5">
                {items.length > 0 ? (
                    items.map(prod => (
                        <Item
                            key={prod.id}
                            producto={prod}
                            editable={true}
                            onInputChange={handleInputChange}
                        />
                    ))
                ) : (
                    <p>No hay productos disponibles.</p>
                )}
            </div>
        </div>
    );
};

export default EmployeeView;
