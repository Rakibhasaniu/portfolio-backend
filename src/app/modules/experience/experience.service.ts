import { TExperience } from './experience.interface';
import { Experience } from './experience.model';

const createExperienceIntoDB = async (payload: TExperience) => {
  const result = await Experience.create(payload);
  return result;
};

const getAllExperiencesFromDB = async () => {
  const result = await Experience.find();
  return result;
};

export const ExperienceService = {
  createExperienceIntoDB,
  getAllExperiencesFromDB,
};
