import '../css/Product.css';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
function Product({ product }) {
    const { id, price, image, title, description } = product;

    const navigate = useNavigate();

    return (
        <div className='card'>
            <img className='image' src={image} alt="" />
            <div>
                <p style={{ textAlign: 'center', height: '50px' }}>{title.slice(0, 56)}</p>
                <h3 style={{ textAlign: 'center' }}>{price}₺</h3>
            </div>

            <div className='flex-row'>
                <button onClick={() => navigate("/product-details/" + id)} className='detail-button'>Detayına Git</button>
            </div>
        </div>
    )
}

Product.propTypes = { // Add prop validation
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired, // Validate image prop
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired,
};

export default Product