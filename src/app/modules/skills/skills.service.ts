/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { TSkill } from './skills.interface';
import { Skill } from './skills.model';

const createSkillIntoDB = async (payload: TSkill) => {
  const skillName = payload.name;
  const isExistsSkill = await Skill.findOne({ name: skillName });

  if (isExistsSkill) {
    throw new AppError(httpStatus.FOUND, 'This skill has already added!');
  }

  const result = await Skill.create(payload);
  return result;
};

const getAllSkillsFromDB = async () => {
  const result = await Skill.find();
  return result;
};

export const SkillService = {
  createSkillIntoDB,
  getAllSkillsFromDB,
};
