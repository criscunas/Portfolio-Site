import projectStyles from './Projects.module.scss';
import { Box, Avatar, Grid} from "@material-ui/core";
import Stack from "@mui/material/Stack";
import GitHubIcon from "@mui/icons-material/GitHub";
import Image from 'next/image';
import Link from 'next/link';
import Carou from '../Carousel';

export default function Projects () {
  
  let items = [
    {
      src : '/images/mealDishr.jpg'
    },
    {
      src: '/images/MealDishr2.jpg'
    },
  ];

  let items2 = [
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
      src: "/images/DigiDiscover2.jpg",
    },
  ];

  return (
    <>
      <Box className={projectStyles.project}>
        <h1 className={projectStyles.project__header}> Projects </h1>
        <Box className={projectStyles.project__section}>
          <div className={projectStyles.project__section__header}> <Link href = "https://meal-dishr-next.vercel.app/"> Digi </Link> <span>  <GitHubIcon/></span> </div> 
            <p className={projectStyles.project__section__subhead}> A Social Media/Forum platform aimed at creating discussion while allowing users to share and connect. Users can create posts & threads, follow each other, recieve a daily news feed & customize thier profile. </p>
            <div className = {projectStyles.project__container}>
            <Carou imgs = {items2} />
            </div>
            <p className={projectStyles.project__stack} >Tech Stack</p>
            <Grid container spacing = {3} style = {{padding:"1rem 0 1rem 0"}}>
              <Grid style ={{display: "flex", justifyContent: "center"}} item xs ={4}>  <Avatar alt="react" src = "images/reactLogo.jpg" variant='square' style = {{height:55, width:61}}/> </Grid>
              <Grid style ={{display: "flex", justifyContent: "center"}} item xs ={4}>  <Avatar alt="cloudinary" src = 'images/cloudinary.jpg' variant='square' style = {{height:55, width:50}} /> </Grid>
              <Grid style ={{display: "flex", justifyContent: "center"}} item xs ={4}>  <Avatar alt="mysql" src = 'images/MYSQLLogo.jpeg' variant='square' style = {{height:55, width:50}} /> </Grid>
              <Grid style ={{display: "flex", justifyContent: "center"}} item xs ={4}>  <Avatar alt="formik" src = 'images/formik.jpg' variant='square' style = {{height:55, width:50}}  /> </Grid>
              <Grid style ={{display: "flex", justifyContent: "center"}} item xs ={4}>  <Avatar alt="knex" src = 'images/knex.jpg' variant='square' style = {{width: 80, height:55}}/></Grid>
              <Grid style ={{display: "flex", justifyContent: "center"}} item xs ={4}>  <Avatar alt="express" src = 'images/express.jpg' variant='square' style = {{width: 100, height:50}}/> </Grid>
              <Grid style ={{display: "flex", justifyContent: "center"}} item xs ={4}>  <Avatar alt="sass" src = "images/sass.jpg" variant='square' style = {{height:55, width:55}}/> </Grid>
              <Grid style ={{display: "flex", justifyContent: "center"}} item xs ={4}>  <Avatar alt="materialui" src = "images/material.jpg" variant='square' style = {{height:55, width:40}}/> </Grid>
              <Grid style ={{display: "flex", justifyContent: "center"}} item xs ={4}>  <Avatar alt="antdesign" src = "images/antdesign.jpg" variant='square' style = {{height:55, width:55}}/> </Grid>
            </Grid>
        </Box>
      
        <Box className={projectStyles.project__section}>
          <div className={projectStyles.project__section__header}> <Link href = "https://meal-dishr-next.vercel.app/"> MealDishr </Link> <span>  <GitHubIcon/></span> </div> 
            <p className={projectStyles.project__section__subhead}> A fully responsive meal generator application that utilizes TheMealDB's API. Returns ingredients list with measurement, instructions & video link.  </p>
            <Carou imgs = {items} />
            <p className = {projectStyles.project__stack}> Tech Stack</p>
            <Grid container spacing = {3} style = {{padding: "1rem 0"}}>
              <Grid style ={{display: "flex", justifyContent: "center"}} item xs ={4}>  <Avatar alt="react" src = "images/reactLogo.jpg" variant='square' style = {{height:55, width:61}}/> </Grid>
              <Grid style ={{display: "flex", justifyContent: "center"}} item xs ={4}>  <Avatar alt="sass" src = "images/sass.jpg" variant='square' style = {{height:55, width:55}}/> </Grid>
              <Grid style ={{display: "flex", justifyContent: "center"}} item xs ={4}>  <Avatar alt="materialui" src = "images/material.jpg" variant='square' style = {{height:55, width:50}}/> </Grid>
            </Grid>
        </Box>
      </Box>
    </>
  );
} 