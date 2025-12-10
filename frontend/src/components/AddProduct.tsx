import { useRef, useState } from "react";
import type { FormEvent } from "react";

const AddProduct = function(){

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const fileInputRef = useRef(null);

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
        console.log('submit');
        handleModal();
    };

    function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>): void {
        if(e.target.files && e.target.files[0]){
            if(e.target.files[0].size > 1500000){
                setErrorMessage('Image too large');
                setImage('');
                e.target.files = null;
                return;
            };
            const image = e.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onloadend = async function(){
                const base64Image = reader.result;
                if(typeof base64Image === 'string'){
                    setImage(base64Image);
                }
            };
        };
    }

    return(
        <>
            <button onClick={function(){handleModal('open')}}>Add Product</button>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <form onSubmit={handleSubmit} className="my-form">
                        <img 
                            src={image || "blank_profile.jpg"}
                        />
                        <input 
                            type="file"
                            accept="image/*"
                            ref={fileInputRef}
                            onChange={handleImageUpload}
                        />
                        <input 
                            type="text"
                            placeholder="name"
                            value={name}
                            onChange={function(){setName(name)}}
                        />
                        <input 
                            type="text"
                            placeholder="price"
                            onChange={function(){setPrice(price)}}
                        />
                        <button onClick={function(){handleModal()}} type="button">Cancel</button>
                        <button type="submit">Add</button>
                    </form>
                    {errorMessage}
                </div>
            </dialog>
        </>
    )
};

export default AddProduct