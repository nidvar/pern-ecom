import { create } from "zustand";

import type { ProductStoreType } from '../types';

const baseURL = 'http://localhost:3001';

export const useProductStore = create<ProductStoreType>(function(set){
    return {
        products: [],
        loading: false,
        fetchProducts: async ()=>{
            try{
                set({loading: true});
                const res = await fetch(baseURL + '/api/allproducts');
                const data = await res.json();
                set({
                    products: data.data
                });
            }catch(err){
                console.log(err);
            }finally{
                set({loading: false});
            }
        }
    }
});