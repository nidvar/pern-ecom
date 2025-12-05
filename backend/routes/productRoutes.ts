import express from 'express';

import { allProducts, createProduct } from '../controllers/productController.js'

const router = express.Router();

router.get('/allproducts', allProducts);

router.post('/createproduct', createProduct);

export default router;