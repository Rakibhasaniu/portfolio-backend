/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ProjectServices } from './project.service';

const createProject = catchAsync(async (req, res) => {
  const project = req.body;
  const result = await ProjectServices.createProjectIntoDB(project);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Project created succesfully!',
    data: result,
  });
});

const getAllProjects = catchAsync(async (req, res) => {
  const result = await ProjectServices.getAllProjectsFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Project retrived succesfully!',
    data: result,
  });
});
const getSingleProjects = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ProjectServices.getSinglelProjectFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Project retrived succesfully!',
    data: result,
  });
});

const updateProjects = catchAsync(async (req, res) => {
  const { id } = req.params;
  const project = req.body;
  const result = await ProjectServices.updateProjectFromDB(id, project);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Project updated succesfully!',
    data: result,
  });
});

const deleteProjects = catchAsync(async (req, res) => {
  const { ids } = req.body;
  const result = await ProjectServices.deleteProjectFromDB(ids);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Projects Deleted succesfully!',
    data: result,
  });
});

export const ProjectController = {
  createProject,
  getAllProjects,
  updateProjects,
  deleteProjects,
  getSingleProjects,
};
