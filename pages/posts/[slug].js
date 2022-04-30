import { getPostBySlug, getAllPosts } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml";
import Head from "next/head";
import ErrorPage from "next/error";
import {useRouter} from 'next/router';
import PostBody from '../../src/components/PostBody/PostBody';
import PostHeader from "../../src/components/PostHeader/PostHeader";
import { Box,Paper } from "@material-ui/core";
import postStyles from '../../styles/Posts.module.scss';;

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export default function Post({ post}) {
  const router = useRouter();



  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      {router.isFallback ? (
        <p>Loading…</p>
      ) : (
        <>
          <article>
            <Head>
              <title>{post.title} </title>
            </Head>
            <Box className={postStyles.post}>
              <Paper elevation={8} className={postStyles.post__paper}>
                <PostHeader
                  title={post.title}
                  date={post.date}
                  author={post.author}
                />

                <div className={postStyles.post__content}>
                  <PostBody content={post.content} />
                </div>
              </Paper>
            </Box>
          </article>
        </>
      )}
    </>
  );
}
