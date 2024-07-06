import { Router } from 'express';
import auth from '../../middleware/auth';
import validateRequest from '../../middleware/validateRequest';
import { USER_ROLE } from '../user/user.constant';
import { ExperienceController } from './experience.controller';
import { ExperienceValidation } from './experience.validation';

const router = Router();

router.post(
  '/create-experience',
  auth(USER_ROLE.superAdmin),
  validateRequest(ExperienceValidation.experienceValidationSchema),
  ExperienceController.createExperience,
);

router.get('/', ExperienceController.getAllExperience);

export const ExperienceRoute = router;
