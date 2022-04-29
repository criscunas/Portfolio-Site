import Head from 'next/head';
import Header from "../src/components/Header/Header";
import ProfileCard from "../src/components/ProfileCard/ProfileCard";
import About from "../src/components/About/About";
import Projects from '../src/components/Projects/Projects';
import homeStyles from '../styles/Home.module.scss';
import { Box } from '@material-ui/core';
import { getAllPosts } from "../lib/api";

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
    <>
      <Head>
        <title>Cristopher Cunas</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Box className = {homeStyles.home}>
        <div className ={homeStyles.home__top}>
          <ProfileCard blogs/>
          <About blogs = {allPosts}  />
        </div>
        <div className={homeStyles.home__bottom}>
          <Projects />
        </div>
      </Box>
    </>
  );
}
