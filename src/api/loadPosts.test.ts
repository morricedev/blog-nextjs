import request from 'graphql-request';
import config from '../config';
import { defaultLoadPostsVariables, loadPosts } from './loadPosts';

jest.mock('graphql-request');

jest.mock('../graphql/queries', () => {
  return {
    GRAPHQL_QUERY: 'A_QUERY',
  };
});

describe('loadPosts', () => {
  it('should call request with default variables', async () => {
    await loadPosts();

    expect(request).toHaveBeenCalledWith(
      config.graphqlURL,
      'A_QUERY',
      defaultLoadPostsVariables,
    );
  });

  it('should call request with custom variables', async () => {
    await loadPosts({ authorSlug: 'OK' });

    expect(request).toHaveBeenCalledWith(config.graphqlURL, 'A_QUERY', {
      ...defaultLoadPostsVariables,
      authorSlug: 'OK',
    });
  });
});
