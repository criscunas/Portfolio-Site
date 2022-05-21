import homeStyles from '../styles/Home.module.scss';
import { Box } from '@material-ui/core';
import { getAllPosts } from "../lib/api";
import {Main} from '../src/components/Main/Main';

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
}

export default function Home({allPosts}) {

  return (
    <Box className={homeStyles.home}>
      <Main blogs={allPosts} />
    </Box>
  );
}

