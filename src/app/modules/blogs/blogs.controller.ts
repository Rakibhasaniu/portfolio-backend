import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { BlogService } from './blogs.service';

const createBlog = catchAsync(async (req, res) => {
  const skill = req.body;
  const result = await BlogService.createBlogIntoDB(skill);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog created succesfully!',
    data: result,
  });
});

const getAllBlogs = catchAsync(async (req, res) => {
  const result = await BlogService.getAllBlogsFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `Blogs retrieved successfully!`,
    data: result,
  });
});

const getSingleBlog = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await BlogService.getSingleBlogFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `Blog retrieved successfully!`,
    data: result,
  });
});

export const BlogsController = {
  createBlog,
  getAllBlogs,
  getSingleBlog,
};
