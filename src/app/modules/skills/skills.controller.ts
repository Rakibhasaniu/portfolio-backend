import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { SkillService } from './skills.service';

const createSkill = catchAsync(async (req, res) => {
  const skill = req.body;
  const result = await SkillService.createSkillIntoDB(skill);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Skill created succesfully!',
    data: result,
  });
});

const getAllSkills = catchAsync(async (req, res) => {
  const result = await SkillService.getAllSkillsFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `Skills retrieved successfully!`,
    data: result,
  });
});

export const SkillsController = {
  createSkill,
  getAllSkills,
};
