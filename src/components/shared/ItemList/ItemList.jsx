import Item from "../Item/Item";
import PropTypes from 'prop-types'; 

const ItemList = ( { productos } ) => {

    return (
        <div>
            <div className="ml-10 grid grid-cols-3 gap-4">
                { productos.map((prod) => <Item producto={prod} key={prod.id} />) }
            </div>
        </div>
    )
}

ItemList.propTypes = {
    productos: PropTypes.array.isRequired,
    titulo: PropTypes.string.isRequired
};

export default ItemList