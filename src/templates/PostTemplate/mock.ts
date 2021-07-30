import { PostsTemplateProps } from '.';
import { data } from '../../api/data.json';

export default {
  settings: data.setting,
  post: data.posts[0],
} as PostsTemplateProps;
