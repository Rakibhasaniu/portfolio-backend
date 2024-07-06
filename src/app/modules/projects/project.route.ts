import { Router } from 'express';
import auth from '../../middleware/auth';
import validateRequest from '../../middleware/validateRequest';
import { USER_ROLE } from '../user/user.constant';
import { ProjectController } from './project.controller';
import { ProjectValidation } from './project.validation';

const router = Router();
router.post(
  '/create-project',
  auth(USER_ROLE.superAdmin),
  validateRequest(ProjectValidation.createProjectValidationSchema),
  ProjectController.createProject,
);

router.get('/', ProjectController.getAllProjects);
router.get('/:id', ProjectController.getSingleProjects);

router.put(
  '/:id',
  auth(USER_ROLE.superAdmin),
  validateRequest(ProjectValidation.updateProjectValidationSchema),
  ProjectController.updateProjects,
);

router.delete(
  '/delete-projects',
  auth(USER_ROLE.superAdmin),
  ProjectController.deleteProjects,
);

export const ProjectRoute = router;
