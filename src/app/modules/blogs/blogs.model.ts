import { Schema, model } from 'mongoose';
import { TBlog } from './blogs.interface';

const blogSchema = new Schema<TBlog>({
  headline: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

export const Blog = model<TBlog>('Blog', blogSchema);
