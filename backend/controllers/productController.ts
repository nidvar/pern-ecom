import type {Request, Response} from 'express';

import { sql } from '../config/db.js'

export const allProducts = async (req: Request, res: Response)=>{
    console.log('getting all products');
    try{
        const products = await sql`
            SELECT * FROM products
            ORDER BY created_at DESC
        `;
        console.log('products------->', products);
        res.status(200).json({message: 'all products', data: products});
    }catch(error){
        console.log('all products error ======= >',error);
    }
};

export const createProduct = async (req: Request, res: Response)=>{
    console.log('Creating single product');
    res.send({message: 'creating single product'})
};

export const singleProduct = async (req: Request, res: Response)=>{
    console.log('get single product');
    res.send({message: 'get single product'})
};

export const updateProduct = async (req: Request, res: Response)=>{
    console.log('update product');
    res.send({message: 'update product'})
};

export const deleteProduct = async (req: Request, res: Response)=>{
    console.log('delete product');
    res.send({message: 'delete product'})
};