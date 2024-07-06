import { z } from 'zod';

const skillValidationSchema = z.object({
  name: z.string(),
  expertiseLevel: z.number(),
});

export const SkillValidation = {
  skillValidationSchema,
};
