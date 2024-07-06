import { TBlog } from './blogs.interface';
import { Blog } from './blogs.model';

const createBlogIntoDB = async (payload: TBlog) => {
  const result = await Blog.create(payload);
  return result;
};

const getAllBlogsFromDB = async () => {
  const result = await Blog.find();
  return result;
};
const getSingleBlogFromDB = async (id: string) => {
  const result = await Blog.findById(id);
  return result;
};

export const BlogService = {
  createBlogIntoDB,
  getAllBlogsFromDB,
  getSingleBlogFromDB,
};
