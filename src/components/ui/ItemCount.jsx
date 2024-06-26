import PropTypes from "prop-types";

const ItemCount = ({ cantidad, handleRestar, handleSumar }) => {
    return (
        <div>
            <div className="flex items-center space-x-4">
                <button onClick={handleRestar} className="px-3 py-1 bg-gray-200 rounded ml-2">-</button>
                <p>{cantidad}</p>
                <button onClick={handleSumar} className="px-3 py-1 bg-gray-200 rounded">+</button>
            </div>
        </div>
    )
}

ItemCount.propTypes = {
    cantidad: PropTypes.number.isRequired,
    handleRestar: PropTypes.func.isRequired,
    handleSumar: PropTypes.func.isRequired
};

export default ItemCount;