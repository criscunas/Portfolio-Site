import projectPageStyles from "../styles/ProjectPage.module.scss";
import {
  Box,
  Avatar,
  Grid,
  Button
} from "@material-ui/core";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";
import TerminalIcon from "@mui/icons-material/Terminal";
import {useRouter} from 'next/router';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
import Head from 'next/head';


export default function Projects() {
  
  const Router = useRouter();

  const NavTo = (url) => {
    return (
      <Link href={url} passHref={true}>
        <a>
          {" "}
          <GitHubIcon htmlColor="black" />{" "}
        </a>
      </Link>
    );
  };

  let items = [
    {
      src: "/images/mealDishr.jpg",
    },
    {
      src: "/images/MealDishr2.jpg",
    },
    {
      src:"/images/mealdish3.png"
    }
  ];

  let items2 = [
    {
      src: "/images/forumly1.png",
    },
    {
      src: "/images/forumly2.png",
    },
    {
      src: "/images/forumly3.png",
    },
    {
      src: "/images/forumly4.png",
    },
  ];

  return (
    <div>
      <Head>
        <title>Cris's Work</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Box id="projects" className={projectPageStyles.projectPage}>
        <div className={projectPageStyles.projectPage__body}>
          <h1 className={projectPageStyles.projectPage__header}> forumly </h1>
          <p className={projectPageStyles.projectPage__description}>
            A social media platform for all. Users have the ability create blog
            posts, create discussion threads & posts, upload a profile image and
            personal bio, post status updates & follow other users and recieve a
            personalized feed.
          </p>
          <div className={projectPageStyles.projectPage__button}>
            <Button
              variant="string"
              size="small"
              color="info"
              endIcon={<TerminalIcon />}
              style={{ backgroundColor: "#E1CE7A" }}
              onClick={() => Router.push("/forumly")}
            >
              <p className={projectPageStyles.projectPage__button_text}>
                {" "}
                Learn More{" "}
              </p>
            </Button>
          </div>
          <div className={projectPageStyles.projectPage__carousel}>
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              autoplay={{
                delay: 6000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Navigation]}
            >
              {items2.map((img, i) => {
                return (
                  <SwiperSlide key={i}>
                    <img src={img.src} alt="forumlyimg" />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <p className={projectPageStyles.projectPage__stack}>Tech Stack</p>
          <Grid
            container
            spacing={5}
            style={{ padding: "1rem 0.5rem 2rem 0.5rem" }}
          >
            <Grid
              style={{ display: "flex", justifyContent: "center" }}
              item
              xs={6}
              sm={4}
            >
              {" "}
              <Avatar
                alt="react"
                src="images/reactlogo.png"
                variant="square"
                style={{ height: 70, width: 80 }}
              />{" "}
            </Grid>
            <Grid
              style={{ display: "flex", justifyContent: "center" }}
              item
              xs={6}
              sm={4}
            >
              {" "}
              <Avatar
                alt="nextjs"
                src="images/next.png"
                variant="square"
                style={{ height: 65, width: 65 }}
              />{" "}
            </Grid>
            <Grid
              style={{ display: "flex", justifyContent: "center" }}
              item
              xs={6}
              sm={4}
            >
              {" "}
              <Avatar
                alt="mysql"
                src="images/MySqlLogo.png"
                variant="square"
                style={{ height: 70, width: 80 }}
              />{" "}
            </Grid>

            <Grid
              style={{ display: "flex", justifyContent: "center" }}
              item
              xs={6}
              sm={4}
            >
              {" "}
              <Avatar
                alt="formik"
                src="images/formik.jpg"
                variant="square"
                style={{ height: 70, width: 80 }}
              />{" "}
            </Grid>
            <Grid
              style={{ display: "flex", justifyContent: "center" }}
              item
              xs={6}
              sm={4}
            >
              {" "}
              <Avatar
                alt="node"
                src="images/nodejs-2.svg"
                style={{ width: 70, height: 70 }}
              />
            </Grid>
            <Grid
              style={{ display: "flex", justifyContent: "center" }}
              item
              xs={6}
              sm={4}
            >
              {" "}
              <Avatar
                alt="express"
                src="images/express.png"
                variant="square"
                style={{ width: 70, height: 70 }}
              />{" "}
            </Grid>
            <Grid
              style={{ display: "flex", justifyContent: "center" }}
              item
              xs={6}
              sm={4}
            >
              {" "}
              <Avatar
                alt="sass"
                src="images/sass.jpg"
                variant="square"
                style={{ height: 60, width: 60 }}
              />{" "}
            </Grid>
            <Grid
              style={{ display: "flex", justifyContent: "center" }}
              item
              xs={6}
              sm={4}
            >
              {" "}
              <Avatar
                alt="materialui"
                src="images/material.jpg"
                variant="square"
                style={{ height: 70, width: 70 }}
              />{" "}
            </Grid>
            <Grid
              style={{ display: "flex", justifyContent: "center" }}
              item
              xs={12}
              sm={4}
            >
              {" "}
              <Avatar
                alt="digitalocean"
                src="images/DigitalOcean.svg"
                variant="square"
                style={{ height: 70, width: 70 }}
              />{" "}
            </Grid>
          </Grid>
        </div>

        <div className={projectPageStyles.project__section}>
          <h1 className={projectPageStyles.projectPage__header}> MealDishr </h1>
          <p className={projectPageStyles.projectPage__description}>
            A fully responsive meal generator application that utilizes
            TheMealDB's API. Returns ingredients list with measurement,
            instructions & a video link. Currently deployed on Vercel. Click
            below to demo the application or on the GitHub icon for the public
            repo.
          </p>
          <div className={projectPageStyles.projectPage__description_link}>
            <Link href="https://meal-dishr-next.vercel.app/">
              <a> meal-dishr-next.vercel.app</a>
            </Link>
          </div>
          <div className={projectPageStyles.projectPage__button}>
            <Button
              variant="string"
              size="small"
              color="info"
              endIcon={<TerminalIcon />}
              style={{ backgroundColor: "#E1CE7A" }}
              onClick={() => Router.push("/MealDishr")}
            >
              <p className={projectPageStyles.projectPage__button_text}>
                {" "}
                Learn More{" "}
              </p>
            </Button>
          </div>

          <div className={projectPageStyles.projectPage__carousel}>
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              autoplay={{
                delay: 6000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Navigation]}
            >
              {items.map((img, i) => {
                return (
                  <SwiperSlide key={i}>
                    <img src={img.src} alt="forumlyimg" />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <p className={projectPageStyles.projectPage__stack}> Tech Stack</p>
          <Grid
            container
            spacing={5}
            style={{ padding: "1rem 0.5rem 2rem 0.5rem" }}
          >
            <Grid
              style={{ display: "flex", justifyContent: "center" }}
              item
              xs={6}
            >
              {" "}
              <Avatar
                alt="react"
                src="images/reactlogo.png"
                variant="square"
                style={{ height: 65, width: 60 }}
              />{" "}
            </Grid>
            <Grid
              style={{ display: "flex", justifyContent: "center" }}
              item
              xs={6}
            >
              {" "}
              <Avatar
                alt="sass"
                src="images/sass.jpg"
                variant="square"
                style={{ height: 65, width: 65 }}
              />{" "}
            </Grid>
            <Grid
              style={{ display: "flex", justifyContent: "center" }}
              item
              xs={6}
            >
              {" "}
              <Avatar
                alt="materialui"
                src="images/material.jpg"
                variant="square"
                style={{ height: 65, width: 65 }}
              />{" "}
            </Grid>
            <Grid
              style={{ display: "flex", justifyContent: "center" }}
              item
              xs={6}
            >
              {" "}
              <Avatar
                alt="nextjs"
                src="images/next.png"
                variant="square"
                style={{ height: 65, width: 65 }}
              />{" "}
            </Grid>
          </Grid>
        </div>
      </Box>
    </div>
  );
}
