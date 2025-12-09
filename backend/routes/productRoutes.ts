import express from 'express';

import { allProducts, createProduct, getSingleProduct, updateProduct, deleteProduct } from '../controllers/productController.js'

const router = express.Router();

router.get('/allproducts', allProducts);

router.get('/singleproduct/:id', getSingleProduct);

router.post('/createproduct', createProduct);

router.put('/updateProduct/:id', updateProduct);

router.delete('/deleteProduct/:id', deleteProduct);

export default router;