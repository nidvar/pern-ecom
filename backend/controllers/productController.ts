import type {Request, Response} from 'express';

import { sql } from '../config/db.js';

export const allProducts = async (req: Request, res: Response)=>{
    console.log('getting all products');
    try{
        const products = await sql`
            SELECT * FROM products
            ORDER BY created_at DESC
        `;
        console.log('products------->', products);
        return res.status(200).json({message: 'all products', data: products});
    }catch(error){
        return res.status(500).json({message: 'fail'})
    }
};

export const createProduct = async (req: Request, res: Response)=>{
    console.log('Creating single product');
    try{
        const name = req.body.name;
        const price = req.body.price;
        const image = req.body.image;

        const newProduct = await sql`
            INSERT INTO products (name, price, image)
            VALUES (${name}, ${price}, ${image})
            RETURNING *
        `
        console.log('new product added', newProduct[0]);
        return res.status(201).json({message: 'product added', product: newProduct});
    }catch(err){
        console.log(err);
        return res.status(500).json({message: 'fail'})
    };
};

export const getSingleProduct = async (req: Request, res: Response)=>{
    console.log('get single product');
    try{
        const id = req.params.id;
        const product = await sql`
            SELECT * FROM products WHERE id=${id}
        `;
        console.log('single product', product);
        return res.status(201).json({message: 'retrieved product', product: product});
    }catch(err){
        console.log(err);
        return res.status(500).json({message: 'fail'})
    };
};

export const updateProduct = async (req: Request, res: Response)=>{
    console.log('update product');
    try{
        const id = req.params.id;

        const name = req.body.name;
        const price = req.body.price;
        const image = req.body.image;

        const product = await sql`
            UPDATE products
            SET name=${name}, price=${price}, image=${image}
            WHERE id=${id}
            RETURNING *
        `;
        console.log('product updated', product);
        return res.status(201).json({message: 'updated product', product: product[0]});
    }catch(err){
        console.log(err);
        return res.status(500).json({message: 'update atempt fail'})
    };
};

export const deleteProduct = async (req: Request, res: Response)=>{
    console.log('delete product');
    try{
        const id = req.params.id;

        const product = await sql`
            DELETE FROM products WHERE id=${id} RETURNING *
        `;
        console.log('product deleted', product);
        return res.status(201).json({message: 'deleted product', product: product[0]});
    }catch(err){
        console.log(err);
        return res.status(500).json({message: 'delete atempt fail'})
    };
};