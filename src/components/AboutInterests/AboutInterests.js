import { Box, Grid, styled } from "@material-ui/core";
import aboutStyles from "./AboutInterests.module.scss";

const InterestsGrid = styled(Grid)({
  padding: "0.5rem 0.3rem",
  color: (props) => props.color,
  fontWeight: (props) => props.font,
  backgroundColor: (props) => props.bg,
  border: "2px solid white",
});

export default function AboutInterests() {
  return (
    <>
      <Box className={aboutStyles.about__interests}>
        <h2 className={aboutStyles.about__interests__title}>
          Cris's Tech Stack
        </h2>
        <Grid container rowSpacing={1} className={aboutStyles.about__interests__front}>
          <InterestsGrid font="bold" bg="#BFDBFE" color="blue" item xs={4}>
            Front-end
          </InterestsGrid>
          <InterestsGrid bg="#dbeafe" item xs={8}>
            Javascript, React, Material UI, HTML/HTML5, CSS, SCSS
          </InterestsGrid>
        </Grid>
        <Grid container rowSpacing={1} className={aboutStyles.about__interests__back}>
          <InterestsGrid font="bold" bg="#BFDBFE" color="blue" item xs={4}>
            Back-end
          </InterestsGrid>
          <InterestsGrid bg="#dbeafe" item xs={8}>
            MySql, Node.js, Express.js, Knex.js, JWT
          </InterestsGrid>
        </Grid>
      </Box>
      <Box className={aboutStyles.about}>
        <h2 className={aboutStyles.about__blurbs}>Cristopher's Blurbs</h2>
        <h2 className={aboutStyles.about__subhead}> About Me: </h2>
        <p className={aboutStyles.about__bio}>
          Full Stack Developer. Jiu Jitsu hobbyist. Primarily writing code in Javascript. Available for work. Remote, Office or Relocation.
        </p>
        <h2 className={aboutStyles.about__subhead}> Who I'd like to meet: </h2>
        <p className={aboutStyles.about__bio}>
          Fellow Developers ! Regardless of what language. Let's connect. I'm
          always looking to expand my network. Feel free to reach out if you
          have any questions.
        </p>
      </Box>
    </>
  );
}
