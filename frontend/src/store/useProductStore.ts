import { create } from "zustand";

import type { ProductStoreType, ProductType } from '../types';

const baseURL = 'http://localhost:3001';

export const useProductStore = create<ProductStoreType>(function(set){
    return {
        products: [],
        loading: false,
        fetchProducts: async ()=>{
            try{
                set({loading: true});
                const res = await fetch(baseURL + '/api/all');
                const data = await res.json();
                set({
                    products: data.data
                });
            }catch(err){
                console.log(err);
            }finally{
                set({loading: false});
            }
        },
        addProduct: async (product:ProductType)=>{
            console.log(product);
            const res = await fetch(baseURL + '/api/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(product),
            });

            const data = await res.json();
            console.log(data);
        },
        deleteProduct: async (id: string)=>{
            try{
                const res = await fetch(baseURL + '/api/delete/' + id, {
                    method: 'DELETE'
                });
                const data = await res.json();
                console.log(data);
            }catch(err){
                console.log(err)
            }
        }
    }
});