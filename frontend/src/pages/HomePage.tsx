import { useEffect } from "react";
import { useProductStore } from "../store/useProductStore";

import ProductCard from "../components/ProductCard";
import AddProduct from "../components/AddProduct";

const HomePage = function () {
    const productStore = useProductStore();

    useEffect(()=>{
        productStore.fetchProducts();
    }, []);

    return (
        <div className="my-main">
            {
                productStore.loading? 
                <div className="loading-blurb">
                    <h2>Loading data...</h2>
                    <p>Please be patient</p>
                </div>:
                <>
                    <div className="add-product-button">
                        <AddProduct />
                    </div>
                    <div className="products-container">
                        {
                            productStore.products.map((item)=>{
                                return <ProductCard product={item} key={item.id} />
                            })
                        }
                    </div>
                </>
            }
        </div>
    )
};

export default HomePage;