import { z } from 'zod';

const blogValidationSchema = z.object({
  headline: z.string(),
  details: z.string(),
  img: z.string(),
  date: z.string(),
});

export const BlogValidation = {
  blogValidationSchema,
};
