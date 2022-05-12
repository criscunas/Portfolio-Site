import profileStyles from "./ProfileCard.module.scss";
import {
  Box,
  Grid,
} from "@material-ui/core";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from '@mui/icons-material/Twitter';
import Link from 'next/link';
import CircularProgress from "@mui/material/CircularProgress";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Environment } from "@react-three/drei";
import { Stars } from "@react-three/drei";
import React, { Suspense } from "react";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

const Robot = React.lazy(() => import('../Robot'));

const ProfileCard = () => {
  
  const Mailto = ({email,subject,body,...props}) => {
    return (
      <a href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
        {props.children}
      </a>
    );
  } 
  

  return (
    <Box className={profileStyles.profile}>
      <Grid container column spacing={1}>
        <Grid item xs={12}>
          <Suspense
            fallback={
              <Grid
                item
                xs={12}
                sm={12}
                className={profileStyles.profile__spinner}
              >
                <CircularProgress color="warning" />
              </Grid>
            }
          >
            <div style={{ height: "170px" }}>
              <Canvas>
                <Environment preset="city" />
                <Stars
                  radius={100}
                  depth={20}
                  count={5000}
                  factor={6}
                  saturation={1}
                  fade
                />
                <OrbitControls
                  autoRotate="true"
                  autoRotateSpeed={3}
                  enableZoom="false"
                />
                <Robot />
              </Canvas>
            </div>
          </Suspense>
        </Grid>
        <Grid item xs={12} className={profileStyles.profile__bio}>
          <h1 className={profileStyles.profile__welcome}>
            Hey I'm Cris
            <span role="img" aria-label="thumbs-up">
              👋
            </span>
          </h1>
          <p className={profileStyles.profile__welcome_sub}>
            {" "}
            Fullstack Developer from the New York Metropolitan area.
          </p>
        </Grid>
        <Grid item xs={12}>
          <div className={profileStyles.profile__socials}>
            <Link href="https://www.linkedin.com/in/cristophercunas/">
              <a className={profileStyles.profile__contact__link}>
                <LinkedInIcon fontSize="large" htmlColor="white" />
              </a>
            </Link>
            <Link href="https://github.com/criscunas">
              <a className={profileStyles.profile__contact__link}>
                <GitHubIcon fontSize="large" htmlColor="white" />
              </a>
            </Link>
            <Link href="https://twitter.com/criscunas">
              <a className={profileStyles.profile__contact__link}>
                <TwitterIcon fontSize="large" htmlColor="white" />
              </a>
            </Link>
            <div className={profileStyles.profile__contact__link}>
              <Mailto email="criscunas@criscunas.dev">
                <AlternateEmailIcon fontSize="large" htmlColor="white" />
              </Mailto>
            </div>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}


export default ProfileCard;



