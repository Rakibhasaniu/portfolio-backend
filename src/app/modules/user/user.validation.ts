import { z } from 'zod';
const userValidationSchema = z.object({
  userId: z.string(),
  email: z.string().email({
    message: 'Invalid Email format.',
  }),
  password: z.string(),
  role: z.string(),
});
export const UserValidation = {
  userValidationSchema,
};
