import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";

import { useProductStore } from "../store/useProductStore";

const ProductPage = function(){
    const params = useParams();
    const navigate = useNavigate();

    const productStore = useProductStore();

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [imageURL, setImageURL] = useState('');

    const id = params.id || '';

    useEffect(()=>{
        productStore.fetchSingleProduct(id);
    }, [id]);

    useEffect(()=>{
        if(productStore.currentProduct){
            setName(productStore.currentProduct.name);
            setPrice(productStore.currentProduct.price);
            setImageURL(productStore.currentProduct.image);
        }
    }, [productStore.currentProduct]);

    return(
        <div className="my-main">
            <h1 className="my-heading">Product Page</h1>
            <form className='my-form'>
                <input 
                    type="text"
                    value={name}
                    placeholder='name'
                    onChange={function(e){
                        setName(e.target.value);
                    }}
                />
                <input 
                    type="text"
                    value={price}
                    placeholder='price'
                    onChange={function(e){
                        setPrice(e.target.value);
                    }}
                />
                <input 
                    type="text"
                    value={imageURL}
                    placeholder='Image url'
                    onChange={function(e){
                        setImageURL(e.target.value);
                    }}
                />
                <div className='form-buttons'>
                    <button type="button" onClick={function(){navigate('/')}}>
                        BACK
                    </button>
                    <div>
                        <button type="button" onClick={async function(){await productStore.editProduct(id, {name, image: imageURL, price}); navigate('/')}}>
                            EDIT
                        </button>
                        <button type="button" onClick={async function(){await productStore.deleteProduct(id); navigate('/')}}>
                            DELETE
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
};

export default ProductPage;