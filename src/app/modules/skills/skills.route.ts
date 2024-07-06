import { Router } from 'express';
import auth from '../../middleware/auth';
import validateRequest from '../../middleware/validateRequest';
import { USER_ROLE } from '../user/user.constant';
import { SkillsController } from './skills.controller';
import { SkillValidation } from './skills.validation';

const router = Router();

router.post(
  '/create-skill',
  auth(USER_ROLE.superAdmin),
  validateRequest(SkillValidation.skillValidationSchema),
  SkillsController.createSkill,
);

router.get('/', SkillsController.getAllSkills);

export const SkillsRoute = router;
