import { Router } from 'express';
import { AuthController } from '../controllers/auth.controller';

const router = Router();

router.post('/signup', AuthController.signUp);
router.post('/login', AuthController.login);

module.exports = router;
