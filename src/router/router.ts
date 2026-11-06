//src/router/router.ts
import { Router } from 'express';
import { healthController } from '../controllers/healthController';
import { registerUser, loginUser,getAllUsers, updateUser } from '../controllers/usuarioController';
import { validateAuthInput } from '../middleware/middleware';

const router = Router();

router.get('/health', healthController);
router.post('/usuario/register', validateAuthInput, registerUser);
router.post('/usuario/login', validateAuthInput, loginUser);
router.get('/usuario', getAllUsers);
router.put('/usuario/:id', validateAuthInput, updateUser);
export default router;