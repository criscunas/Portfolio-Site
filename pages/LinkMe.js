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
            src: "/images/linkme1.png",
        },
        {
            src: "/images/linkme2.png",
        },
    ];

    return (
        <div className="project">
            <Head>
                <title>LinkMe</title>
            </Head>
            <div className="project-main">
                <div className="project-header">
                    <h1 className="project-title"> LinkMe </h1>
                    <Link href="/https://github.com/criscunas/link-me-vue">
                        <a className="project-link">
                            LinkMe Repo
                        </a>
                    </Link>
                    <p className="project-description">
                        A LinkTree clone built on Vue.js, Tailwind, Nest & MongoDB.
                    </p>
                </div>

                <div className="project-about">
                    <h1 className="project-about_title">The idea</h1>
                    <p className="project-about_subhead">
                        I've always be kind of fascinated by how big LinkTree is and by
                        how simple of a product they offer. I figured it'd be fun to try and replicate
                        that product with a new framework I've been working with.
                    </p>

                    <h1 className="project-about_title">Tech</h1>
                    <p className="project-about_subhead">
                        Vue.js, TailwindCSS, Nest.js, MongoDB.
                    </p>
                    <h1 className="project-about_title">My Role</h1>
                    <p className="project-about_subhead">
                        As this was another solo project, I handled everything from building out the backend
                        to building out the client ui. Some other tasks included
                    </p>
                    <div className="project-list">
                        <li className="project-list_item">
                            Reading up on Vue.js/Nest.js docs when facing small roadblocks.
                        </li>

                        <li className="project-list_item">
                            Keeping code clean and legible while using best practices.
                        </li>

                        <li className="project-list_item">
                            Implementing authentication for users with JWT and Vue Cookies.
                        </li>

                        <li className="project-list_item">
                            Testing and debugging many of the user features.
                        </li>
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
                                    <img src={img.src} alt="LinkMe images" />
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}
