import PropTypes from 'prop-types';
import Item from "../Item/Item";

const ItemList = ({ productos, titulo }) => {
    return (
        <div>
            <h2>{titulo}</h2>
            <div className="ml-10 grid grid-cols-3 gap-4">
                {productos.map((prod) => <Item producto={prod} key={prod.id} />)}
            </div>
        </div>
    );
}

ItemList.propTypes = {
    productos: PropTypes.array.isRequired,
    titulo: PropTypes.string
};

ItemList.defaultProps = {
    titulo: 'Productos'
};

export default ItemList;
