import express from 'express';
import { allProducts } from '../controllers/productController.js';
const router = express.Router();
router.get('/allproducts', allProducts);
export default router;
