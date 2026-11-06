import { pool } from '../database/db';

export class UsuarioService {
  static async obtenerTodos() {
    const result = await pool.query('SELECT id, email, created_at FROM usuarios');
    return result.rows;
  }

  static async registrar(email: string, password: string) {
    const result = await pool.query(
      'INSERT INTO usuarios (email, password) VALUES ($1, $2) RETURNING id, email, created_at',
      [email, password]
    );
    return result.rows[0];
  }

  static async findByEmail(email: string) {
    const result = await pool.query(
      'SELECT * FROM usuarios WHERE email = $1',
      [email]
    );
    return result.rows[0] || null;
  }

  static async validateCredentials(email: string, password: string) {
    const result = await pool.query(
      'SELECT id, email FROM usuarios WHERE email = $1 AND password = $2',
      [email, password]
    );
    return result.rows[0] || null;
  }

  static async updatePassword(email: string, password: string) {
    const result = await pool.query(
      'UPDATE usuarios SET password = $1 WHERE email = $2 RETURNING id, email',
      [password, email]
    );
    return result.rows[0] || null;
  }
}