import {
  Box,
  Card,
  Grid,
  CardContent
} from "@material-ui/core";
import aboutStyles from './AboutMe.module.scss'

export const AboutMe = () => {
  return (
    <Box className={aboutStyles.about}>
      <h1 className={aboutStyles.about__header}> About me </h1>
      <Card className={aboutStyles.about__card}>
        <CardContent className={aboutStyles.about__card_content}>
          <h1 className={aboutStyles.about__bio_header}>Bio</h1>
          <p className={aboutStyles.about__bio}>
            Full Stack Developer. Jiu Jitsu hobbyist. Lover of code and
            learning. Primarily writing in Javascript but have taken college
            courses in Java. From building out an efficient backend, to building
            user friendly UI & eventually deployment. I truly enjoy every step
            of the process and am always looking for ways to improve my
            skillset. Feel free to reach me through the links above.
          </p>
          <div>
            <h1 className={aboutStyles.about__bio_skills_header}>Skills</h1>
            <p className={aboutStyles.about__bio_skills_text}>
              {" "}
              Javascript, React, Node, Express, API's, SQL, Authenticaton, Agile
              Development, GitHub, HTML, CSS, SCSS, Knex.js, Material UI.
            </p>
          </div>
          <Grid container className={aboutStyles.about__bio_edu}>
            <Grid item xs={12}>
              <h1 className={aboutStyles.about__bio_edu_title}>Education</h1>
            </Grid>
            <Grid item xs={12} sm={6} className={aboutStyles.about__bio_school}>
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

            <Grid item xs={12} sm={6} className={aboutStyles.about__bio_school}>
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
        </CardContent>
      </Card>
    </Box>
  );
};
