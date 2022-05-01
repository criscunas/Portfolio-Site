import {getSortedPostsData} from '../lib/posts';
import { getAllPosts } from "../lib/api";
import Image from 'next/image';
import Head from "next/head";
import { useRouter } from "next/router";
import {Paper, Card , CardHeader, CardContent , CardActions, Box} from "@material-ui/core";
import BlogStyles from '../styles/Blogs.module.scss';


export async function getStaticProps() {

    const posts = getAllPosts([
      "title",
      "date",
      "slug",
      "author",
      "excerpt",
    ]);


  return {
    props: {
      posts
    },
  };
}

export default function Blogs ({posts}) {

  const Router = useRouter();

  return (
  <>
  <Head>
    <title> Blogs </title>
  </Head>
  <Box className = {BlogStyles.blogs} >
    {posts.map((post,i) => {
      return (
        <Card key={i} className={BlogStyles.blogs__card}>
          <CardHeader
            title={post.title}
            titleTypographyProps={{ variant: "h5", gutterBottom: "true" }}
            subheader={post.date.slice(0, 10)}
            subheaderTypographyProps={{ variant: "subtitle2"}}
          />
          <div className={BlogStyles.blogs__card_excerpt}>
            <p> {post.excerpt} ...</p>
          </div>
          <div className={BlogStyles.blogs__card_footer}>
            <p onClick = {() => Router.push(`/posts/${post.slug}`)} > Read more </p>
          </div>
        </Card>
      );
      })}
    </Box>
    </>
  )
}
