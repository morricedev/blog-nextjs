import { MenuPropsLinks } from '../components/Menu';
import { PostProps } from '../components/Post';
import { PostTag } from './tag';

export type PostStrapi = PostProps & {
  tags: PostTag[];
  slug: string;
  allowComents: boolean;
  menuLink?: MenuPropsLinks[];
};
