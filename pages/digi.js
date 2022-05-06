import {Box, Grid} from '@material-ui/core';
import digiStyles from '../styles/Digi.module.scss';
import Carou from "../src/components/Carousel";



export default function Digi() {
  

  let images = [
    {
      src: "/images/digiProfile1.jpg",
    },
    {
      src: "/images/digiDash.jpg",
    },
    {
      src: "/images/digiFeed.jpg",
    },
    {
      src: "/images/digiDiscover.jpg",
    },
    {
      src: "/images/digiDiscover2.jpg",
    },
  ];


  return (
    <Box className={digiStyles.digi}>
      <div className={digiStyles.digi__header}>
        <h1 className={digiStyles.digi__title}> digi </h1>
        <p className={digiStyles.digi__description}>
          A Social Network for Developers and Tech Enthusiasts.
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
          Create a tech focused social platform where users can create, share &
          connect with other.
        </p>

        <h1 className={digiStyles.digi__about_head}>My Role</h1>
        <p className={digiStyles.digi__about_description}>
          As this was a solo project, I handled everything.
          These tasks included:
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
            Creating digital ocean droplet to host server.</li>
          </Grid>
        </Grid>
      </div>

      <div className={digiStyles.digi__carousel}>
        <Carou imgs={images} />
      </div>
    </Box>
  );
}
