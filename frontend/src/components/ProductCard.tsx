import { Link } from 'react-router-dom';
import type { ProductType } from '../types';

const ProductCard = function({product} : {product: ProductType}){
    return (
        <Link to={"/product/" + product.id} className="product-card">
            <div className="product-image-container">
                <img src={product.image} alt="product" />
            </div>
            <div className='product-description'>
                <p>{product.name}</p>
                <p>{product.price}</p>
            </div>
        </Link>
    )
};

export default ProductCard;