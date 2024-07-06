import { z } from 'zod';

const experienceValidationSchema = z.object({
  position: z.string(),
  institution: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  address: z.string(),
  responsibilities: z.string(),
});

export const ExperienceValidation = {
  experienceValidationSchema,
};
