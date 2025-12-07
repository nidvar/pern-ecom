import express from 'express';

import { allProducts, createProduct, getSingleProduct, updateProduct, deleteProduct } from '../controllers/productController.js'

const router = express.Router();

router.get('/allproducts', allProducts);

router.get('/:id/singleproduct', getSingleProduct);

router.post('/createproduct', createProduct);

router.put('/:id/updateProduct', updateProduct);

router.delete('/:id/deleteProduct', deleteProduct);

export default router;