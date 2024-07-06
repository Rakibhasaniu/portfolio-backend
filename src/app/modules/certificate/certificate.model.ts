import { Schema, model } from 'mongoose';
import { TCertificate } from './certificate.interface';

const certificateSchema = new Schema<TCertificate>({
  name: {
    type: String,
    required: true,
  },
  institution: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  skills: {
    type: String,
    required: true,
  },
});

export const Certificate = model<TCertificate>(
  'Certificate',
  certificateSchema,
);
