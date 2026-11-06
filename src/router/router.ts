// src/router/router.ts
import { Router } from 'express';
import { healthController } from '../controllers/healthController';
import { registerUser, loginUser, getAllUsers, updateUser } from '../controllers/usuarioController';
import { validateAuthInput } from '../middleware/middleware';

const router = Router();

/**
 * @openapi
 * /api/health:
 *   get:
 *     summary: Verificar estado del servicio
 *     tags:
 *       - Health
 *     responses:
 *       200:
 *         description: El backend está funcionando correctamente
 */
router.get('/health', healthController);

/**
 * @openapi
 * /api/usuario/register:
 *   post:
 *     summary: Registrar un nuevo usuario
 *     tags:
 *       - Usuarios
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 example: estudiante@gmail.com
 *               password:
 *                 type: string
 *                 example: "1234"
 *     responses:
 *       201:
 *         description: Usuario registrado exitosamente
 *       400:
 *         description: Datos de entrada inválidos
 */
router.post('/usuario/register', validateAuthInput, registerUser);

/**
 * @openapi
 * /api/usuario/login:
 *   post:
 *     summary: Iniciar sesión de usuario
 *     tags:
 *       - Usuarios
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 example: estudiante@gmail.com
 *               password:
 *                 type: string
 *                 example: "1234"
 *     responses:
 *       200:
 *         description: Autenticación exitosa
 *       401:
 *         description: Credenciales incorrectas
 */
router.post('/usuario/login', validateAuthInput, loginUser);

/**
 * @openapi
 * /api/usuario:
 *   get:
 *     summary: Obtener todos los usuarios
 *     tags:
 *       - Usuarios
 *     responses:
 *       200:
 *         description: Lista de usuarios (sin passwords)
 */
router.get('/usuario', getAllUsers);

/**
 * @openapi
 * /api/usuario/actualizar-contraseña:
 *   put:
 *     summary: Actualizar contraseña de usuario
 *     tags:
 *       - Usuarios
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 example: estudiante@gmail.com
 *               password:
 *                 type: string
 *                 example: nuevaContrasena123
 *     responses:
 *       200:
 *         description: Contraseña actualizada correctamente
 *       400:
 *         description: El correo y la nueva contraseña son obligatorios
 *       404:
 *         description: Usuario no encontrado
 */
router.put('/usuario/actualizar-contraseña', validateAuthInput, updateUser);

export default router;