import Head from 'next/head';
import Header from "../src/components/Header/Header";
import ProfileCard from "../src/components/ProfileCard/ProfileCard";
import AboutInterests from "../src/components/AboutInterests/AboutInterests";
import Projects from '../src/components/Projects/Projects';
import homeStyles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Cristopher Cunas</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Header />
      <div className={homeStyles.home}>
        <div className={homeStyles.home__top} >
          <ProfileCard />
          <AboutInterests />
        </div>
        <div className={homeStyles.home__bottom} >
          <Projects />
        </div>
      </div>
    </>
  );
}
