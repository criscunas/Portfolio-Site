import {getSortedPostsData} from '../lib/posts';
import { getAllPosts } from "../lib/api";
import Image from 'next/image';
import Head from "next/head";
import { useRouter } from "next/router";
import {Paper, Card , CardHeader, Button, Box} from "@material-ui/core";
import blogPage from "../styles/Blogs.module.scss";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import DateFormatter from "../src/components/date-formatter";

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
      <Box className={blogPage.blogs}>
      <div className={blogPage.blogs__header}>
        <h1 className={blogPage.blogs__header_title}> Cris's Blogs <span aria-labe = "technologist"> 👨🏻‍💻</span> </h1>
        <p className={blogPage.blogs__header_sub}> Updated weekly. </p>
      </div>
        {posts.map((post, i) => {
          return (
            <Card key={i} className={blogPage.blogs__card}>
              <div className={blogPage.blogs__card_body}>
                <h1 className={blogPage.blogs__card_title}> {post.title} </h1>
                <p className={blogPage.blogs__card_date}> 
                  <DateFormatter dateString = {post.date} />  
                </p>
                <p className={blogPage.blogs__card_excerpt}> {post.excerpt} ... </p>
              </div>
              <div className={blogPage.blogs__card_footer}>
                <Button
                  variant="string"
                  onClick={() => Router.push(`/posts/${post.slug}`)}
                  size="small"
                  color="info"
                  endIcon={<ReadMoreIcon />}
                  style={{ backgroundColor: "#E1CE7A" }}
                >
                  <p className={blogPage.blogs__button_text}> Read </p>
                </Button>
              </div>
            </Card>
          );
        })}
      </Box>
    </>
  );
}
