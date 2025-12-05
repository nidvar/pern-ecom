import type {Request, Response} from 'express'

export const allProducts = async (req: Request, res: Response)=>{
    console.log(req.body);
    console.log('getting all products')
    res.send({message: 'all products'})
};

export const createProduct = async (req: Request, res: Response)=>{
    console.log(req.body);
    console.log('Creating single product');
    res.send({message: 'creating single product'})
};