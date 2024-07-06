import { z } from 'zod';

const createProjectValidationSchema = z.object({
  id: z.string().optional(),
  img: z.string(),
  name: z.string(),
  details: z.string(),
  technologies: z.array(z.string()).optional(),
  functionalities: z.array(z.string()).optional(),
  frontendLink: z.string().optional(),
  backendLink: z.string().optional(),
  clientSiteCode: z.string().optional(),
  serverSiteCode: z.string().optional(),
});

const updateProjectValidationSchema = z.object({
  img: z.string().optional(),
  name: z.string().optional(),
  details: z.string().optional(),
  technologies: z.array(z.string()).optional(),
  functionalities: z.array(z.string()).optional(),
  frontendLink: z.string().optional(),
  backendLink: z.string().optional(),
  clientSiteCode: z.string().optional(),
  serverSiteCode: z.string().optional(),
});

export const ProjectValidation = {
  createProjectValidationSchema,
  updateProjectValidationSchema,
};
