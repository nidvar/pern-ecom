import { useEffect } from "react";
import { useProductStore } from "../store/useProductStore";

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
                <div className="products-container">
                    {
                        productStore.products.map((item, index)=>{
                            return (
                                <div key={index} className="single-product">
                                    <div className="product-image-container">
                                        <img src={item.image} alt="product" />
                                    </div>
                                    <p>{item.name}</p>
                                    <p>{item.price}</p>
                                </div>
                            )
                        })
                    }
                </div>
            }
        </div>
    )
};

export default HomePage;