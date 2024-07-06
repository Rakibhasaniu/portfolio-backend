import { TProject } from './project.interface';
import { Project } from './project.model';

const createProjectIntoDB = async (payload: TProject) => {
  const result = Project.create(payload);
  return result;
};

const getAllProjectsFromDB = async () => {
  const result = await Project.find();
  return result;
};
const getSinglelProjectFromDB = async (id: string) => {
  const result = await Project.findById(id);
  return result;
};

const updateProjectFromDB = async (id: string, payload: Partial<TProject>) => {
  const result = await Project.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

const deleteProjectFromDB = async (id: string) => {
  const result = await Project.deleteOne({ id });
  return result;
};

export const ProjectServices = {
  createProjectIntoDB,
  getSinglelProjectFromDB,
  getAllProjectsFromDB,
  updateProjectFromDB,
  deleteProjectFromDB,
};
