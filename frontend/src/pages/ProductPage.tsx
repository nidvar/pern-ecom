import { useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";

import { useProductStore } from "../store/useProductStore";

const ProductPage = function(){
    const params = useParams();
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [imageURL, setImageURL] = useState('');

    const productStore = useProductStore();
    const id = params.id || '';

    return(
        <div className="my-main">
            <h1 className="my-heading">Product Page</h1>
            <form className='my-form'>
                <input 
                    type="text"
                    value={name}
                    onChange={function(e){
                        setName(e.target.value);
                    }}
                />
                <input 
                    type="text"
                    value={price}
                    onChange={function(e){
                        setPrice(e.target.value);
                    }}
                />
                <input 
                    type="text"
                    value={imageURL}
                    onChange={function(e){
                        setImageURL(e.target.value);
                    }}
                />
                <div className='form-buttons'>
                    <button 
                        onClick={
                            function(){
                                navigate('/');
                            }
                        }>
                        BACK
                    </button>
                    <div>
                        <button onClick={function(){console.log('edit');}}>
                            EDIT
                        </button>
                        <button onClick={function(){productStore.deleteProduct(id); navigate('/')}}>
                            DELETE
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
};

export default ProductPage;