import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 3000;
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import productRoutes from '../backend/routes/productRoutes.js';
const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use('/api', productRoutes);
app.listen(PORT, () => {
    console.log('running on port ', PORT);
});
