import style from './ProjectPageDisplay.module.scss';
import {Avatar, Grid, Button } from "@material-ui/core";
import Link from "next/link";
import TerminalIcon from "@mui/icons-material/Terminal";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";


export const ProjectPageDisplay = ({title , link , url, description, page, images, stack}) => {

  const Router = useRouter()
  
  return (
    <div>
      <div className={style.projectPage__body}>
        <h1 className={style.projectPage__header}> {title} </h1>
        <div className={style.projectPage__description_link}>
          <Link href={url}>
            <a> {link}</a>
          </Link>
        </div>
        <p className={style.projectPage__description}>
            {description}
        </p>
        <div className={style.projectPage__button}>
          <Button
            variant="string"
            size="small"
            color="info"
            endIcon={<TerminalIcon />}
            style={{ backgroundColor: "#E1CE7A" }}
            onClick={() => Router.push(page)}
          >
            <p className={style.projectPage__button_text}>
              {" "}
              Learn More{" "}
            </p>
          </Button>
        </div>
        <div className={style.projectPage__carousel}>
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
                  <img src={img.src} alt="projectimgs" />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <p className={style.projectPage__stack}>Tech Stack</p>
        <Grid
          container
          spacing={5}
          style={{ padding: "1rem 0.5rem 2rem 0.5rem" }}
        >
        {stack.map((ele) => {
          return (
          <Grid
            style={{ display: "flex", justifyContent: "center" }}
            item
            xs={4}
            sm={6}
          >
            <Avatar
              alt={ele.alt}
              src={ele.src}
              variant="square"
              style={{ height: 75, width: 75 }}
            />
          </Grid>
          )
        })}
        </Grid>
      </div>
    </div>
  );
};
