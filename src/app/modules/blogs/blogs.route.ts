import { Router } from 'express';
import auth from '../../middleware/auth';
import validateRequest from '../../middleware/validateRequest';
import { USER_ROLE } from '../user/user.constant';
import { BlogsController } from './blogs.controller';
import { BlogValidation } from './blogs.validation';

const router = Router();

router.post(
  '/create-blog',
  auth(USER_ROLE.superAdmin),
  validateRequest(BlogValidation.blogValidationSchema),
  BlogsController.createBlog,
);

router.get('/', BlogsController.getAllBlogs);
router.get('/:id', BlogsController.getSingleBlog);

export const BlogsRoute = router;
