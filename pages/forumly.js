import {Box, Grid} from '@material-ui/core';
import digiStyles from '../styles/Digi.module.scss';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
import Head from 'next/head';
import Link from 'next/link';


export default function Forumly() {
  

  let images = [
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
    }
  ];


  return (
    <div>
      <Head>
        <title>Forumly</title>
      </Head>
      <Box className={digiStyles.digi}>
        <div className={digiStyles.digi__header}>
          <h1 className={digiStyles.digi__title}> forumly </h1>
          <Link href="https://forumly.app" >
            <a className = {digiStyles.digi__link}> forumly.app</a>
          </Link>
          <p className={digiStyles.digi__description}>
            A Social Network for all.
          </p>
          <p className={digiStyles.digi__description_note}>
            * important note *
            <br />
            Entire client side was rebuilt with Next.js and the backend is
            completely redesigned. The repo currently available to you is the
            first version.
          </p>
        </div>

        <div className={digiStyles.digi__about}>
          <h1 className={digiStyles.digi__about_head}>The idea</h1>
          <p className={digiStyles.digi__about_description}>
            Create a social platform where users can create, share & connect
            with other.
          </p>
          <h1 className={digiStyles.digi__about_head}>Tech</h1>
          <p className={digiStyles.digi__about_description}>
            React, Next.js, Material UI, SCSS, iron-session, MySQL, Knex.js,
            JWT, Express, AWS, Digital Ocean.
          </p>
          <h1 className={digiStyles.digi__about_head}>My Role</h1>
          <p className={digiStyles.digi__about_description}>
            As this was a solo project, I handled everything. These tasks
            included:
          </p>
          <Grid container className={digiStyles.digi__about_list} spacing={2}>
            <Grid item xs={12} sm={6}>
              <li className={digiStyles.digi__about_list_item}>
                Creating SQL Database and setting up AWS RDS.
              </li>
            </Grid>

            <Grid item xs={12} sm={6}>
              <li className={digiStyles.digi__about_list_item}>
                {" "}
                Creating Express server, API endpoints & setting up JWT
                Authentication.{" "}
              </li>
            </Grid>

            <Grid item xs={12} sm={6}>
              <li className={digiStyles.digi__about_list_item}>
                Building entire client side with Next.js & Material UI
              </li>
            </Grid>

            <Grid item xs={12} sm={6}>
              <li className={digiStyles.digi__about_list_item}>
                Building entire client side with Next.js & Material UI
              </li>
            </Grid>

            <Grid item xs={12} sm={6}>
              <li className={digiStyles.digi__about_list_item}>
                Setting up iron-session for Authentication via Next's built in
                API.
              </li>
            </Grid>

            <Grid item xs={12} sm={6}>
              <li className={digiStyles.digi__about_list_item}>
                Creating digital ocean droplet to host server.
              </li>
            </Grid>
          </Grid>
        </div>

        <div className={digiStyles.digi__carousel}>
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Navigation]}
          >
            {images.map((img, i) => {
              return (
                <SwiperSlide key={i}>
                  <img src={img.src} alt="forumlyimg" />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </Box>
    </div>
  );
}
