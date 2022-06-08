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
    <div class="project">
      <Head>
        <title>Forumly</title>
      </Head>
      <div class="project-main">
        <div class="project-header">
          <h1 class="project-title"> forumly </h1>
          <Link href="https://github.com/criscunas/forumly-client">
            <a class="project-link"> forumly.app</a>
          </Link>
          <p class="project-description">
            A Social Network for all.
          </p>
          <p class="project-note">
            Currently down but source code is available on github repo.
          </p>
        </div>

        <div class="project-about">
          <h1 class="project-about_title">The idea</h1>
          <p class="project-about_subhead">
            Create a social platform where users can create, share & connect
            with other.
          </p>
          <h1 class="project-about_title">Tech</h1>
          <p class="project-about_subhead">
            React, Next.js, Material UI, SCSS, iron-session, MySQL, Knex.js,
            JWT, Express, AWS, forumlytal Ocean.
          </p>
          <h1 class="project-about_title">My Role</h1>
          <p class="project-about_subhead">
            As this was a solo project, I handled everything. These tasks
            included:
          </p>
          <div class="project-list">
            <li class="project-list_item">
              Creating and setting up a SQL database well equiped for a social media site.
            </li>
            <li class="project-list_item">
              Built a node server with Express, JWT & more to handle user requests, creation, etc.
            </li>
            <li class="project-list_item">
              Building the entire client side with Next.js & Material UI. 
            </li>
            <li class="project-list_item">
              Create queries with Knex.js to pull user information regarding thier followers, post history & more.
            </li>
            <li class="project-list_item">
              Using and setting up iron-session for Authentication with Next's built in
              API.
            </li>
            <li class="project-list_item">
              Setting up a digital ocean VPS to host node server.
            </li>
          </div>
        </div>

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
    </div>
  );
}
