import {
  Box,
  Card,
  CardHeader,
  CardActions,
  CardContent
} from "@material-ui/core";
import aboutStyles from './AboutMe.module.scss'

export const AboutMe = () => {
  return (
    <Box className={aboutStyles.about}>
      <h1 className={aboutStyles.about__header}> About me </h1>
      <Card className={aboutStyles.about__card}>
        <CardContent>
          <p className={aboutStyles.about__bio}>
            Full Stack Developer. Jiu Jitsu hobbyist. Lover of code and
            learning. Primarily writing in Javascript but have taken college
            courses in Java. From building out an efficient backend, to building
            user friendly UI & eventually deployment. I truly enjoy every step
            of the process and am always looking for ways to improve my
            skillset. Feel free to reach me through the links above.
          </p>
        </CardContent>
      </Card>
    </Box>
  );
};
