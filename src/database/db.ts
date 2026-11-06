import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

// Usará DATABASE_URL en Render o en tu .env local
export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

// Prueba rápida de conexión
pool.connect()
  .then(() => console.log('Conectado exitosamente a PostgreSQL'))
  .catch((err) => console.error('Error conectando a PostgreSQL:', err));