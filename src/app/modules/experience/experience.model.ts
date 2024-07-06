import { Schema, model } from 'mongoose';
import { TExperience } from './experience.interface';

const experienceSchema = new Schema<TExperience>({
  position: {
    type: String,
    required: true,
  },
  institution: {
    type: String,
    required: true,
  },
  startDate: {
    type: String,
    required: true,
  },
  endDate: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  responsibilities: {
    type: String,
    required: true,
  },
});

export const Experience = model<TExperience>('Experience', experienceSchema);
