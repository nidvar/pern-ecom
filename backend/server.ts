import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 3000;

import path from 'path';
import express, { Request } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';

import productRoutes from './routes/productRoutes.js';
import { sql } from './config/db.js';
import { aj } from './lib/arcjet.js';
import type { ArcjetNodeRequest } from "@arcjet/node";

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

// Arcjet protection
app.use(async (req: Request, res, next) => {
  try {
    const decision = await aj.protect(req as ArcjetNodeRequest, { requested: 1 });

    if (decision.isDenied()) {
      if (decision.reason.isRateLimit()) res.status(429).json({ error: 'Too many Requests' });
      else if (decision.reason.isBot()) res.status(403).json({ error: 'Bot access denied' });
      else res.status(403).json({ error: 'Forbidden' });
      return;
    }

    next();
  } catch (err) {
    console.error('Arcjet error', err);
    next(err);
  }
});

// API routes
app.use('/api', productRoutes);

// Serve React frontend in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')));
  app.get('*', (_req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
  });
}

// Initialize database
async function initDB() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS products (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        image VARCHAR(255) NOT NULL,
        price VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
    console.log('Connected to POSTGRES NEON SQL DB');
  } catch (err) {
    console.error('DB error', err);
  }
}

// Start server after DB init
(async () => {
  await initDB();
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})();
