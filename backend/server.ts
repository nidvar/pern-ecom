import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 3000;

import type { Request } from "express";

import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';

import productRoutes from './routes/productRoutes.js'
import { sql } from './config/db.js';
import { aj } from "./lib/arcjet.js";
import type { ArcjetNodeRequest } from "@arcjet/node";

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.use(async(req: Request, res, next)=>{
    console.log('arcjet middleware----')
    try{
        const decision = await aj.protect(req as ArcjetNodeRequest, {
            requested: 1
        });

        if(decision.isDenied()){
            if(decision.reason.isRateLimit()){
                res.status(429).json({ error: 'Too many Requests' });
            } else if(decision.reason.isBot()){
                res.status(403).json({ error: 'Bot access denied' });
            } else{
                res.status(403).json({ error: 'Forbidden' });
            }
            return
        }

        next();
    }catch(err){
        console.log('arcjet error',err);
        next(err);
    }
})

app.use('/api', productRoutes);

async function initDB(){
    try{
        await sql`
            CREATE TABLE IF NOT EXISTS products (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                image VARCHAR(255) NOT NULL,
                price VARCHAR(255) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `;
        console.log('connected to POSTGRES NEON SQL DB')
    }catch(err){
        console.log('error', err);
    }
};

initDB().then(()=>{
    app.listen(PORT, ()=>{
        console.log('running on port ', PORT);
    });
});