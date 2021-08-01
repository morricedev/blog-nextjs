import Head from 'next/head';
import { GetStaticProps } from 'next';
import {
  defaultLoadPostsVariables,
  loadPosts,
  StrapiData,
} from '../api/loadPosts';
import { PostsTemplate } from '../templates/PostsTemplate';

export default function Index({ posts, setting, variables }: StrapiData) {
  return (
    <>
      <Head>
        <title>{setting.blogName}</title>
        <meta name="description" content={setting.blogDescription} />
      </Head>
      <PostsTemplate posts={posts} settings={setting} variables={variables} />
    </>
  );
}

export const getStaticProps: GetStaticProps<StrapiData> = async () => {
  let data = null;

  try {
    data = await loadPosts();
  } catch (error) {
    data = null;
  }

  if (!data || !data.posts || !data.posts.length) {
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
      },
    },
    revalidate: 86400,
  };
};
