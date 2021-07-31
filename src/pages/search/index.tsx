import { GetServerSideProps } from 'next';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';

import {
  defaultLoadPostsVariables,
  loadPosts,
  StrapiData,
} from '../../api/loadPosts';
import { PostsTemplate } from '../../templates/PostsTemplate';

export default function SearchPage({ posts, setting, variables }: StrapiData) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>
          Pesquisa: {router.query.q} - {setting.blogName}
        </title>
        <meta name="description" content={setting.blogDescription} />
      </Head>
      <PostsTemplate posts={posts} settings={setting} variables={variables} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps<StrapiData> = async (
  ctx,
) => {
  let data = null;
  const query = ctx.query.q || '';

  if (!query) {
    return {
      notFound: true,
    };
  }

  const variables = { postSearch: query as string };

  try {
    data = await loadPosts(variables);
  } catch (error) {
    data = null;
  }

  if (!data || !data.posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      posts: data.posts,
      setting: data.setting,
      variables: {
        ...defaultLoadPostsVariables,
        ...variables,
      },
    },
  };
};
