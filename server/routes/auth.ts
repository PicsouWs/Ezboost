import { Router } from 'express';
import { login, register, refreshToken } from '../controllers/auth.js';
import { validateAuth } from '../middleware/validateAuth.js';

const router = Router();

router.post('/login', validateAuth, login);
router.post('/register', validateAuth, register);
router.post('/refresh-token', refreshToken);

export { router as authRouter };