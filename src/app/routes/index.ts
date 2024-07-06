import { Router } from 'express';
import { AuthRoute } from '../modules/auth/auth.route';
import { BlogsRoute } from '../modules/blogs/blogs.route';
import { CertificatesRoute } from '../modules/certificate/certificate.route';
import { ExperienceRoute } from '../modules/experience/experience.route';
import { ProjectRoute } from '../modules/projects/project.route';
import { SkillsRoute } from '../modules/skills/skills.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoute,
  },
  {
    path: '/project',
    route: ProjectRoute,
  },
  {
    path: '/skill',
    route: SkillsRoute,
  },
  {
    path: '/blog',
    route: BlogsRoute,
  },
  {
    path: '/experience',
    route: ExperienceRoute,
  },
  {
    path: '/certificate',
    route: CertificatesRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
