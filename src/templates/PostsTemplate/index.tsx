import { Cancel } from '@styled-icons/material-outlined/Cancel';
import { CheckCircleOutline } from '@styled-icons/material-outlined/CheckCircleOutline';

import * as Styled from './styles';
import { PostGrid } from '../../components/PostGrid';
import { PostStrapi } from '../../sharedTypes/post';
import { SettingsStrapi } from '../../sharedTypes/settings';
import { BaseTemplate } from '../Base';
import { useEffect, useRef, useState } from 'react';
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
  //#region search
  const router = useRouter();
  const [searchValue, setSearchValue] = useState(router?.query?.q || '');
  const [searchDisabled, setSearchDisabled] = useState(true);
  const [isReady, setIsReady] = useState(true);
  const inputTimeout = useRef(null);

  useEffect(() => {
    if (isReady) {
      setSearchDisabled(false);
    } else {
      setSearchDisabled(true);
    }
  }, [isReady]);

  useEffect(() => {
    clearTimeout(inputTimeout.current);

    if (router?.query?.q === searchValue) {
      return;
    }

    const q = searchValue;

    if (!q || q.length < 3) return;

    inputTimeout.current = setTimeout(() => {
      setIsReady(false);
      router
        .push({
          pathname: '/search/',
          query: { q },
        })
        .then(() => setIsReady(true));
    }, 600);

    return () => clearTimeout(inputTimeout.current);
  }, [searchValue, router]);
  //#endregion

  //#region posts
  const [statePosts, setStatePosts] = useState(posts);
  const [stateVariables, setStateVariables] = useState(variables);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [noMorePosts, setNoMorePosts] = useState(false);

  useEffect(() => {
    setStatePosts(posts);
    setNoMorePosts(false);
    setButtonDisabled(false);
    setStateVariables(variables);
  }, [posts, variables]);
  //#endregion

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
        <Styled.SearchInput
          type="search"
          placeholder="Encontre posts"
          name="q"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          disabled={searchDisabled}
        />
        {searchDisabled ? (
          <Cancel className="search-cancel-icon" aria-label="Input disabled" />
        ) : (
          <CheckCircleOutline
            className="search-ok-icon"
            aria-label="Input enabled"
          />
        )}
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
