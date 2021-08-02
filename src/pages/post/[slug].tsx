import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';

import { loadPosts, StrapiData } from '../../api/loadPosts';
import { Loading } from '../../templates/Loading';
import { PostTemplate } from '../../templates/PostTemplate';

export default function PostPage({ posts, setting }: StrapiData) {
  const router = useRouter();

  if (router.isFallback) return <Loading />;

  const post = posts[0];

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta
          property="og:url"
          content={`https://blog-nextjs-liart.vercel.app/post/${post.slug}`}
        />
        <meta property="og:image" content={post.cover.url} />
      </Head>
      <PostTemplate post={post} settings={setting} />;
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  let data: StrapiData | null = null;
  let paths = [];

  try {
    data = await loadPosts();
    paths = data.posts.map((post) => ({ params: { slug: post.slug } }));
  } catch (error) {
    data = null;
  }

  if (!data || !data.posts || !data.posts.length) {
    paths = [];
  }

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<StrapiData> = async (ctx) => {
  let data = null;

  try {
    data = await loadPosts({ postSlug: ctx.params.slug as string });
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
    },
    revalidate: 600,
  };
};
