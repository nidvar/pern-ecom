import express from 'express';

import { allProducts, createProduct, getSingleProduct, updateProduct, deleteProduct } from '../controllers/productController.js'

const router = express.Router();

router.get('/all', allProducts);

router.get('/product/:id', getSingleProduct);

router.post('/create', createProduct);

router.put('/update/:id', updateProduct);

router.delete('/delete/:id', deleteProduct);

export default router;