import Head from "next/head";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";

export default function MealDishr() {
 let images = [
  {
   src: "/images/mealDishr.jpg",
  },
  {
   src: "/images/MealDishr2.jpg",
  },
  {
   src: "/images/mealdish3.png",
  },
 ];

 return (
  <div class="project">
   <Head>
    <title>MealDishr</title>
   </Head>
   <div class="project-main">
    <div class="project-header">
     <h1 class="project-title"> Mealdishr </h1>
     <Link href="https://meal-dishr-next.vercel.app/">
      <a class="project-link">meal-dishr-next.vercel.app</a>
     </Link>
     <p class="project-description">A meal generator application.</p>
    </div>

    <div class="project-about">
     <h1 class="project-about_title">The idea</h1>
     <p class="project-about_subhead">
      With only 24 hours to build something, my coding partner and I decided to
      utilize themealdb's free API to build an application that would return to
      you the ingredients, measurements & a video on how to prepare the meal of
      your choosing.
     </p>

     <h1 class="project-about_title">Tech</h1>
     <p class="project-about_subhead">React, Material UI, SCSS.</p>
     <h1 class="project-about_title">My Role</h1>
     <p class="project-about_subhead">
      As this was a paired programming project, my partner and I split our tasks
      evenly. I recently rebuilt this project with Next.js and have it deployed
      on Vercel. Some of the work that went into the rebuild included
     </p>
     <div class="project-list">
      <li class="project-list_item">
       Adding responsive styling for mobile to desktop.
      </li>

      <li class="project-list_item">
       Using the Next.js framework to rebuild our original app.
      </li>

      <li class="project-list_item">
       Using Material UI to deliver a clean and user friendly layout.
      </li>

      <li class="project-list_item">Deployment with Vercel.</li>
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
  </div>
 );
}
