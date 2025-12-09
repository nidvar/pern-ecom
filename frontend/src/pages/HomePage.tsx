import { useEffect } from "react";
import { useProductStore } from "../store/useProductStore";

const HomePage = function () {
    const productStore = useProductStore();

    useEffect(()=>{
        productStore.fetchProducts();
    }, []);

    return (
        <div className="my-main">
            <h1 className="my-heading">Home Page</h1>
            {   
                productStore.loading? 
                <div className="loading-blurb">
                    <h2>Loading data...</h2>
                    <p>Please be patient</p>
                </div>:
                productStore.products.map((item, index)=>{
                    return (
                        <div key={index} className="single-product">
                            <img src={item.image} />
                            <p>{item.name}</p>
                            <p>{item.price}</p>
                        </div>
                    )
                })
            }
        </div>
    )
};

export default HomePage;