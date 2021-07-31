import * as Styled from './styles';
import { PostGrid } from '../../components/PostGrid';
import { PostStrapi } from '../../sharedTypes/post';
import { SettingsStrapi } from '../../sharedTypes/settings';
import { BaseTemplate } from '../Base';
import { useState } from 'react';
import { loadPosts, LoadPostsVariables } from '../../api/loadPosts';
import { useRouter } from 'next/dist/client/router';

export type PostsTemplateProps = {
  settings: SettingsStrapi;
  posts?: PostStrapi[];
  variables?: LoadPostsVariables;
};

export const PostsTemplate = ({
  settings,
  posts = [],
  variables,
}: PostsTemplateProps) => {
  const router = useRouter();

  const [statePosts, setStatePosts] = useState(posts);
  const [stateVariables, setStateVariables] = useState(variables);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [noMorePosts, setNoMorePosts] = useState(false);

  const handleLoadMorePosts = async () => {
    setButtonDisabled(true);

    const newVariables = {
      ...stateVariables,
      start: stateVariables.start + stateVariables.limit,
    };

    const morePosts = await loadPosts(newVariables);

    if (!morePosts || !morePosts.posts || !morePosts.posts.length) {
      setNoMorePosts(true);
      return;
    }

    setButtonDisabled(false);
    setStateVariables(newVariables);
    setStatePosts((p) => [...p, ...morePosts.posts]);
  };

  return (
    <BaseTemplate settings={settings}>
      <Styled.SearchContainer>
        <form action="/search" method="GET">
          <Styled.SearchInput
            type="search"
            placeholder="Encontre posts"
            name="q"
            defaultValue={router?.query.q}
          />
        </form>
      </Styled.SearchContainer>

      <PostGrid posts={statePosts} />

      <Styled.ButtonContainer>
        {statePosts.length > 0 && (
          <Styled.Button
            onClick={handleLoadMorePosts}
            disabled={buttonDisabled}
          >
            {noMorePosts ? 'Sem mais posts' : ' Carregar mais'}
          </Styled.Button>
        )}
      </Styled.ButtonContainer>
    </BaseTemplate>
  );
};
