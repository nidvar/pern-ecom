import { useState } from "react";
import type { FormEvent } from "react";

import { useProductStore } from "../store/useProductStore";

const AddProduct = function(){

    const productStore = useProductStore();

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [imageURL, setImageURL] = useState('');

    const handleModal = function(arg?: string){
        const modal = document.getElementById('my_modal_1') as HTMLDialogElement | null;
        if(modal){
            if(arg === 'open'){
                modal.showModal();
            }else{
                modal.close();
            }
        };
    };

    function handleSubmit(e: FormEvent<HTMLFormElement>): void {
        e.preventDefault();
        const productObj = {
            name: name,
            price: parseFloat(price).toFixed(2),
            image: imageURL
        };
        productStore.addProduct(productObj);
        handleModal();
    };

    return(
        <>
            <button onClick={function(){handleModal('open')}}>Add Product</button>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <form onSubmit={handleSubmit} className="my-form">
                        <input 
                            type="text"
                            placeholder="name"
                            value={name}
                            onChange={function(e){setName(e.target.value)}}
                        />
                        <input 
                            type="number"
                            placeholder="price"
                            value={price}
                            onChange={function(e){setPrice(e.target.value)}}
                        />
                        <input 
                            type="text"
                            placeholder="Image URL"
                            value={imageURL}
                            onChange={function(e){setImageURL(e.target.value)}}
                        />
                        <div className="form-buttons">
                            <button onClick={function(){handleModal()}} type="button">Cancel</button>
                            <button type="submit">Add</button>
                        </div>
                    </form>
                </div>
            </dialog>
        </>
    )
};

export default AddProduct