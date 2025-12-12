import { useParams, useNavigate } from "react-router-dom";

import { useProductStore } from "../store/useProductStore";

const ProductPage = function(){
    const params = useParams();
    const navigate = useNavigate();
    const productStore = useProductStore();
    const id = params.id || ''
    return(
        <div className="my-main">
            <h1 className="my-heading">Product Page</h1>
            <button onClick={function(){productStore.deleteProduct(id); navigate('/')}}>DELETE</button>
        </div>
    )
};

export default ProductPage;