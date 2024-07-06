import { Schema, model } from 'mongoose';
import { TSkill } from './skills.interface';

const skillSchema = new Schema<TSkill>({
  name: {
    type: String,
  },

  expertiseLevel: {
    type: Number,
  },
});

export const Skill = model<TSkill>('Skill', skillSchema);
