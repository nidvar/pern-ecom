import { create } from "zustand";

import type { ProductStoreType, ProductType } from '../types';

const baseURL = 'http://localhost:3001';

export const useProductStore = create<ProductStoreType>(function(set, get){
    return {
        products: [],
        loading: false,
        currentProduct: null,
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
        },
        editProduct: async (id: string, product: ProductType)=>{
            try{
                const res = await fetch(baseURL + '/api/update/' + id, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(product)
                });
                const data = await res.json();
                console.log(data);
            }catch(err){
                console.log(err)
            }
        },
        fetchSingleProduct: async (id: string)=>{
            try{
                const res = await fetch(baseURL + '/api/product/' + id);
                const data = await res.json();
                console.log(data);
                set({ currentProduct: data.product[0] })
            }catch(err){
                console.log(err);
            }
        }
    }
});