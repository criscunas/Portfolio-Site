import { Box, Grid, styled, Card , CardHeader, CardActions, Avatar} from "@material-ui/core";
import aboutStyles from "./About.module.scss";
import Image from "next/image";
import {useRouter} from 'next/router';
import DateFormatter from '../date-formatter';

const InterestsGrid = styled(Grid)({
  padding: "1rem 0.3rem",
  color: (props) => props.color,
  fontWeight: (props) => props.font,
  backgroundColor: (props) => props.bg,
  borderLeft:"4px solid white"
});

  const profilePhoto = () => {
    return (
      <Image
        src="/images/profile.jpg"
        alt="profile-photo"
        width={145}
        height={145}
      />
    );
  };

export default function AboutInterests({blogs}) {
  
  const Router = useRouter();

  return (
    <>
      <Box className={aboutStyles.about__interests}>
        <div className={aboutStyles.about__education}>
          <h2 className={aboutStyles.about__interests__title}>Schools</h2>
          <Grid
            container
            rowspacing={1}
            className={aboutStyles.about__interests__front}
          >
            <InterestsGrid font="bold" item xs={9}>
              BrainStation
              <br />
              New York, NY
              <br />
              Web Development
            </InterestsGrid>
            <InterestsGrid item xs={3}>
              <p style={{ textAlign: "center", fontWeight: 500 }}>2022 </p>
            </InterestsGrid>
          </Grid>
          <Grid
            container
            rowspacing={1}
            className={aboutStyles.about__interests__front}
          >
            <InterestsGrid font="bold" item xs={9}>
              Johnston County Community College
              <br />
              Smithfield, NC
              <br />
              Criminal Justice Technology
            </InterestsGrid>
            <InterestsGrid item xs={3}>
              <p style={{ textAlign: "center", fontWeight: 500 }}>2016-2018 </p>
            </InterestsGrid>
          </Grid>
        </div>
        <div className={aboutStyles.about__tech}>
          <h2 className={aboutStyles.about__interests__title}>Tech Stack</h2>
          <Grid
            container
            rowspacing={1}
            className={aboutStyles.about__interests__front}
          >
            <InterestsGrid font="bold" item xs={4}>
              Front-end
            </InterestsGrid>
            <InterestsGrid item xs={8}>
              <p style={{ textAlign: "center", fontWeight: 500 }}>
                Javascript, React, Material UI, HTML/HTML5, CSS, SCSS
              </p>
            </InterestsGrid>
          </Grid>
          <Grid
            container
            rowspacing={1}
            className={aboutStyles.about__interests__front}
          >
            <InterestsGrid font="bold" item xs={4}>
              Back-end
            </InterestsGrid>
            <InterestsGrid item xs={8}>
              <p style={{ textAlign: "center", fontWeight: 500 }}>
                MySql, Node.js, Express.js, Knex.js, JWT
              </p>
            </InterestsGrid>
          </Grid>
        </div>
      </Box>
      <Box className={aboutStyles.about}>
        <h2 className={aboutStyles.about__blurbs}>Cristopher's Blurbs</h2>
        <Card className={aboutStyles.about__blurbs_card}>
          <h2 className={aboutStyles.about__subhead}> About Me: </h2>
          <p className={aboutStyles.about__bio}>
            Full Stack Developer. Jiu Jitsu hobbyist. Lover of code and
            learning. From building servers and databases to designing a fun
            MySpace profile clone like the one you see now, I enjoy every second
            of the process. I'm truly passionate about my work and am always
            looking for ways to improve. I primarily work with Javascript &
            React but have some familiarity with Java from my college courses. I
            am currently working on deploying Digi as I rebuilt it with Next.js,
            iron-session & am using a Digital Ocean VPS to host my server. I am
            currently open to work as well. No preferences in remote or office.
            I believe I'd make a great asset to any team. Feel free to reach me
            through the links above.
          </p>
          <h2 className={aboutStyles.about__subhead}>Who I'd like to meet:</h2>
          <p className={aboutStyles.about__bio}>
            Everyone ! I'm a strong believer that you can learn so much from
            anyone. Espicially when it comes to tech as the learning never ends.
            Feel free to reach me through the links in my contact section.
            Whether it be just to chat, questions about my work or career
            opportunites. I am always looking to expand my network.
          </p>
        </Card>
      </Box>
      <Box className={aboutStyles.about__blogs}>
        <h2 className={aboutStyles.about__blurbs}>Cristopher's Blogs</h2>
        {blogs.map(({ date, excerpt, title, slug }, i) => {
          return (
            <Card key={i} className={aboutStyles.about__blogs_card}>
              <CardHeader
                title={title}
                titleTypographyProps={{ variant: "body1" }}
                subheader={<DateFormatter dateString={date} />}
                avatar={<Avatar aria-label="profile">{profilePhoto()}</Avatar>}
              />
              <p
                onClick={() => Router.push(`/posts/${slug}`)}
                className={aboutStyles.about__blogs_post}
              >
                {excerpt.slice(0, 125)}....{" "}
              </p>
              <CardActions>
                <p className={aboutStyles.about__blogs_footer}>
                  Click above to read more
                  <span role="img" aria-label="pointer">
                    👆🏼
                  </span>{" "}
                </p>
              </CardActions>
            </Card>
          );
        })}
      </Box>
    </>
  );
}
