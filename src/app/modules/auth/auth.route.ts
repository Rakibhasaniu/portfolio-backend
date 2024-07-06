import { Router } from 'express';
import validateRequest from '../../middleware/validateRequest';
import { UserControler } from '../user/user.controller';
import { UserValidation } from '../user/user.validation';
import { AuthController } from './auth.controller';
import { AuthValidation } from './auth.validation';

const router = Router();

router.post(
  '/register',
  validateRequest(UserValidation.userValidationSchema),
  UserControler.createUser,
);

router.post(
  '/login',
  validateRequest(AuthValidation.loginValidationSchema),
  AuthController.loginUser,
);

export const AuthRoute = router;
