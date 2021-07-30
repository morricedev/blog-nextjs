import { PostsTemplateProps } from '.';
import { data } from '../../api/data.json';

export default {
  settings: data.setting,
  posts: data.posts,
} as PostsTemplateProps;
