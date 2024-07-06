import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ExperienceService } from './experience.service';

const createExperience = catchAsync(async (req, res) => {
  const experience = req.body;
  const result = await ExperienceService.createExperienceIntoDB(experience);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Experience created succesfully!',
    data: result,
  });
});

const getAllExperience = catchAsync(async (req, res) => {
  const result = await ExperienceService.getAllExperiencesFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `Experiences retrieved successfully!`,
    data: result,
  });
});

export const ExperienceController = {
  createExperience,
  getAllExperience,
};
