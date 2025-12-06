import express from 'express';

import { allProducts, createProduct, singleProduct, updateProduct, deleteProduct } from '../controllers/productController.js'

const router = express.Router();

router.get('/allproducts', allProducts);
router.get('/:id/singleproduct', singleProduct);

router.post('/createproduct', createProduct);

router.put('/:id/updateProduct', updateProduct);

router.delete('/deleteProduct', deleteProduct);

export default router;