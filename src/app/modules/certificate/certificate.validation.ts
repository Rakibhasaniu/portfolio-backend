import { z } from 'zod';

const certificateValidationSchema = z.object({
  name: z.string(),
  institution: z.string(),
  img: z.string(),
  skills: z.string(),
});

export const CertificateValidation = {
  certificateValidationSchema,
};
