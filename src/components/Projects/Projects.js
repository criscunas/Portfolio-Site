import projectStyles from './Projects.module.scss';
import { Box, Avatar, Grid , Card, CardHeader, CardContent} from "@material-ui/core";
import Stack from "@mui/material/Stack";
import GitHubIcon from "@mui/icons-material/GitHub";
import Image from 'next/image';
import Link from 'next/link';
import Carou from '../Carousel';

export default function Projects () {
  

  const NavTo = (url) => {
    return (
    <Link href= {url} passHref={true}>
      <a> <GitHubIcon htmlColor='black'/> </a>
    </Link>
    )
  }

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
      src: "/images/digiDiscover2.jpg",
    },
  ];

  return (
    <>
      <Box id = "projects" className={projectStyles.project}>
        <h1 className={projectStyles.project__header}> Projects </h1>
        <Card className={projectStyles.project__section}>
          <CardHeader title = "Digi" titleTypographyProps={{variant: 'h5'}} avatar = {NavTo('https://github.com/criscunas/digi-client')} />
            <CardContent>
              <p className={projectStyles.project__section__subhead}> A Social Media/Forum platform aimed at creating discussion while allowing users to share and connect. Users can create posts & threads, follow each other, recieve a daily news feed & customize thier profile. Currently in works of deploying as I rebuilt the application with Next.js, iron session for authentication & using a VPS to host my server. Click on GitHub icon for the public repo. New repo will be up when deployed. </p>
              <br/> 
            </CardContent> 
            <div className = {projectStyles.project__container}>
            <Carou imgs = {items2} />
            </div>
            <p className={projectStyles.project__stack} >Tech Stack</p>
            <Grid container spacing = {3} style = {{padding:"1rem 0.5rem 2rem 0.5rem"}}>
              <Grid style ={{display: "flex", justifyContent: "center"}} item xs ={4}>  <Avatar alt="react" src = "images/reactLogo.jpg" variant='square' style = {{height:55, width:61}}/> </Grid>
              <Grid style ={{display: "flex", justifyContent: "center"}} item xs ={4}>  <Avatar alt="cloudinary" src = 'images/cloudinary.jpg' variant='square' style = {{height:55, width:50}} /> </Grid>
              <Grid style ={{display: "flex", justifyContent: "center"}} item xs ={4}>  <Avatar alt="mysql" src = 'images/MySQLLogo.jpg' variant='square' style = {{height:55, width:50}} /> </Grid>
              <Grid style ={{display: "flex", justifyContent: "center"}} item xs ={4}>  <Avatar alt="formik" src = 'images/formik.jpg' variant='square' style = {{height:55, width:50}}  /> </Grid>
              <Grid style ={{display: "flex", justifyContent: "center"}} item xs ={4}>  <Avatar alt="knex" src = 'images/Knex.jpg' variant='square' style = {{width: 80, height:55}}/></Grid>
              <Grid style ={{display: "flex", justifyContent: "center"}} item xs ={4}>  <Avatar alt="express" src = 'images/express.jpg' variant='square' style = {{width: 100, height:50}}/> </Grid>
              <Grid style ={{display: "flex", justifyContent: "center"}} item xs ={4}>  <Avatar alt="sass" src = "images/sass.jpg" variant='square' style = {{height:55, width:55}}/> </Grid>
              <Grid style ={{display: "flex", justifyContent: "center"}} item xs ={4}>  <Avatar alt="materialui" src = "images/material.jpg" variant='square' style = {{height:55, width:40}}/> </Grid>
              <Grid style ={{display: "flex", justifyContent: "center"}} item xs ={4}>  <Avatar alt="antdesign" src = "images/antdesign.jpg" variant='square' style = {{height:55, width:55}}/> </Grid>
            </Grid>
        </Card>
      
        <Card className={projectStyles.project__section}>
          <CardHeader title = "MealDishr" titleTypographyProps={{variant: 'h5'}}  avatar = {NavTo('https://github.com/criscunas/MealDishrNext')}/>
          <CardContent>
          <p className={projectStyles.project__section__subhead}> 
           A fully responsive meal generator application that utilizes TheMealDB's API. Returns ingredients list with measurement, instructions & video link. Deployed on Vercel. 
          Click below to demo the application or on the GitHub icon for the public repo.       
           <Link href = "https://meal-dishr-next.vercel.app/"> 
            <a> meal-dishr-next.vercel.app</a>
           </Link>
          </p>
          </CardContent>
            <div className = {projectStyles.project__container}>
              <Carou imgs = {items} />
            </div>
            <p className = {projectStyles.project__stack}> Tech Stack</p>
            <Grid container spacing = {3} style = {{padding:"1rem 0.5rem 2rem 0.5rem"}}>
              <Grid style ={{display: "flex", justifyContent: "center"}} item xs ={4}>  <Avatar alt="react" src = "images/reactLogo.jpg" variant='square' style = {{height:55, width:61}}/> </Grid>
              <Grid style ={{display: "flex", justifyContent: "center"}} item xs ={4}>  <Avatar alt="sass" src = "images/sass.jpg" variant='square' style = {{height:55, width:55}}/> </Grid>
              <Grid style ={{display: "flex", justifyContent: "center"}} item xs ={4}>  <Avatar alt="materialui" src = "images/material.jpg" variant='square' style = {{height:55, width:50}}/> </Grid>
            </Grid>
        </Card>
      </Box>
    </>
  );
} 