import { Schema, model } from 'mongoose';
import { TProject } from './project.interface';

const projectSchema = new Schema<TProject>({
  id: {
    type: String,
  },
  img: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  funtionalities: {
    type: [String],
  },
  technologies: {
    type: [String],
  },
  frontendLink: {
    type: String,
  },
  backendLink: {
    type: String,
  },
  clientSiteCode: {
    type: String,
  },
  serverSiteCode: {
    type: String,
  },
});

export const Project = model<TProject>('Project', projectSchema);
