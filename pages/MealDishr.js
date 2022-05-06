import { Box, Grid } from "@material-ui/core";
import mealStyles from "../styles/MealDishr.module.scss";
import Carou from "../src/components/Carousel";

export default function MealDishr() {
  

  let images = [
    {
      src : '/images/mealDishr.jpg'
    },
    {
      src: '/images/MealDishr2.jpg'
    },
    {
      src:'/images/mealdish3.png'
    }
  ];

  return (
    <Box className={mealStyles.mealdishr}>
      <div className={mealStyles.mealdishr__header}>
        <h1 className={mealStyles.mealdishr__title}> Mealdishr </h1>
        <p className={mealStyles.mealdishr__description}>
          A meal generator application.
        </p>
        <p className={mealStyles.mealdishr__description_note}>
          <a>https://meal-dishr-next.vercel.app/</a>
        </p>
      </div>

      <div className={mealStyles.mealdishr__about}>
        <h1 className={mealStyles.mealdishr__about_head}>The idea</h1>
        <p className={mealStyles.mealdishr__about_description}>
          With only 24 hours to build something, my coding partner and I decided
          to utilize themealdb's free API to build an application that would
          return to you the ingredients, measurements & a video on how to
          prepare the meal of your choosing.
        </p>

        <h1 className={mealStyles.mealdishr__about_head}>My Role</h1>
        <p className={mealStyles.mealdishr__about_description}>
          As this was a paired programming project, my partner and I split our
          tasks evenly. I recently rebuilt this project with Next.js and have it
          deployed on Vercel. Some of the work that went into the rebuild included
        </p>
        <Grid
          container
          className={mealStyles.mealdishr__about_list}
          spacing={2}
        >
          <Grid item xs={12} sm={6}>
            <li className={mealStyles.mealdishr__about_list_item}> Adding responsive styling for mobile to desktop.</li>
          </Grid>

          <Grid item xs={12} sm={6}>
            <li className={mealStyles.mealdishr__about_list_item}>
              Using the Next.js framework to rebuild our original app.
            </li>
          </Grid>

          <Grid item xs={12} sm={6}>
            <li className={mealStyles.mealdishr__about_list_item}>
              Using Material UI to deliver a clean and user friendly layout.
            </li>
          </Grid>

          <Grid item xs={12} sm={6}>
            <li className={mealStyles.mealdishr__about_list_item}>
              Deployment with Vercel. 
            </li>
          </Grid>
        </Grid>
      </div>

      <div className={mealStyles.mealdishr__carousel}>
        <Carou imgs={images} />
      </div>
    </Box>
  );
}
