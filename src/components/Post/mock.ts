import { PostProps } from '.';
import { data } from '../../api/data.json';
import mock from '../HtmlContent/mock';

const { title, excerpt, cover, author, categories, createdAt } = data.posts[0];

export default {
  title,
  excerpt,
  cover,
  content: mock,
  author,
  categories,
  createdAt,
} as PostProps;
