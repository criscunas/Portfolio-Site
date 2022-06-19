import {
  Grid,
  CardContent
} from "@material-ui/core";
import aboutStyles from './AboutMe.module.scss'

export const AboutMe = () => {
  return (
    <div className="card shadow-xl bg-white mb-6 rounded-xl">
      <div>
        <h1 className="font-semibold text-2xl"> About me </h1>
          <div className="my-4">
            <h1> Bio </h1>
            <p> Full Stack Developer. Jiu Jitsu hobbyist. Primarily writing in Javascript but have taken
            courses in Java. Currently a Software Engineer Intern at Streamforge. Really enjoy learning about and 
            working the latest tech. Currently working with Vue.js but also familiar with Next.js. Always looking to better my skills
            and pass it on. Feel free to reach me through my socials above. </p>
          </div>
          <div className = "my-4">
            <h1> Skills </h1>
            <p> Javascript, React, Vue.js, Next.js, Node, Express, API's, SQL, Knex.js, Github, HTML, CSS, SCSS, Tailwind, Material UI, Agile Devlopment. </p>
          </div>
          <Grid container>
            <Grid item xs={12}>
              <h1> Education </h1>
            </Grid>
            <Grid item xs={12} sm={6}>
              <p>
                BrainStation
                <br />
                Web Development
                <br />
                2022
                <br />
                New York, NY
              </p>
            </Grid>

            <Grid item xs={12} sm={6}>
              <p>
                Johnston Community College
                <br />
                A.S. Criminal Justice Technology
                <br />
                2016-2018
                <br />
                Smithfield, NC
              </p>
            </Grid>
          </Grid>
      </div>  
    </div>
  );
};
