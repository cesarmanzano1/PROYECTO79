import { pool } from './db';

export const initDb = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS usuarios (
      id SERIAL PRIMARY KEY,
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;
  try {
    await pool.query(query);
    console.log('Tabla "usuarios" verificada/creada correctamente');
  } catch (error) {
    console.error('Error al inicializar la tabla de usuarios:', error);
  }
};