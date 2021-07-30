import { request } from 'graphql-request';
import config from '../config';
import { GRAPHQL_QUERY } from '../graphql/queries';
import { PostStrapi } from '../sharedTypes/post';
import { SettingsStrapi } from '../sharedTypes/settings';

export type LoadPostsVariables = {
  categorySlug?: string;
  postSlug?: string;
  postSearch?: string;
  authorSlug?: string;
  tagSlug?: string;
  sort?: string;
  start?: number;
  limit?: number;
};

export type StrapiData = {
  posts: PostStrapi[];
  setting: SettingsStrapi;
};

export const loadPosts = async (
  viariables: LoadPostsVariables = {},
): Promise<StrapiData> => {
  const defaultVariables: LoadPostsVariables = {
    sort: 'createdAt:desc',
    start: 0,
    limit: 10,
  };

  const data = await request(config.graphqlURL, GRAPHQL_QUERY, {
    ...defaultVariables,
    ...viariables,
  });

  return data;
};
