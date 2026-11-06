/* src/server.ts */
import express from 'express';
import cors from 'cors';
import router from './router/router';
import { NotFoundHandler } from './middleware/middleware';

const app = express();

// Middlewares obligatorios
app.use(cors()); // Para permitir peticiones desde el frontend
app.use(express.json()); // Para procesar JSON en req.body

// Rutas de la API
app.use('/api', router);
app.use(NotFoundHandler);

export default app;


// {
//   "email": "cesar22@gmail.com",
//   "password": "1234"
// }