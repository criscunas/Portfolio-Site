import Image from 'next/image';
import profileStyles from "./ProfileCard.module.scss";
import {
  Card,
  Box,
  Grid,
} from "@material-ui/core";
import PersonIcon from "@mui/icons-material/Person";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from '@mui/icons-material/Twitter';
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import CodeIcon from "@mui/icons-material/Code";
import Link from 'next/link';

export default function ProfileCard() {


  const profilePhoto = () => {
    return (
      <Image
        src="/images/profile.jpg"
        alt="profile-photo"
        width={130}
        height={140}
      />
    );
  }

  const profileBio = () => {
    return (
      <div className={profileStyles.profile__bio}>
        <p>
          Welcome
          <span role="img" aria-label="thumbs-up">
            👋
          </span>
        </p>
        25 
        <br />
        Newark,
        <br />
        New Jersey
        <br />
        United States
        <br />
        <p className={profileStyles.profile__bio__status}>
          <span>
            <PersonIcon htmlColor="#eb8f34" />{" "}
          </span>
          Online Now !{" "}
        </p>
      </div>
    );
  }

  return (
    <Box className={profileStyles.profile}>
      <Card className={profileStyles.profile__card}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <p className={profileStyles.profile__name}> Cristopher Cunas </p>
          </Grid>
          <Grid item xs={12} className={profileStyles.profile__body}>
            <div className={profileStyles.profile__image}>{profilePhoto()}</div>
            {profileBio()}
          </Grid>
          <Grid item xs={12}>
            <p className={profileStyles.profile__current__mood}>
              <span className={profileStyles.profile__span}> Mood: </span>
              Productive
              <span role="img" aria-label="thumbs-up">
                👍
              </span>
            </p>
          </Grid>
        </Grid>
      </Card>

      <Card className={profileStyles.profile__tablet_card}>
        <Grid container>
          <div className={profileStyles.profile__tablet_body}>
            <Grid item xs={4}>
              {profilePhoto()}
            </Grid>
            <Grid item xs={8} className={profileStyles.profile__tablet_bio}>
              <p className={profileStyles.profile__name_tablet}>
                Cristopher Cunas
              </p>
              <div className={profileStyles.profile__welcome_tablet}>
                <p>
                  Welcome <span aria-label="wave">👋</span>
                </p>
                <p>
                  Mood: Productive <span aria-label="thumbs-up"> 👍 </span>{" "}
                </p>
              </div>
              <div className={profileStyles.profile__location_tablet}>
                <p> 25 </p>
                <p> Newark, NJ, United States </p>
                <p className={profileStyles.profile__bio__status}>
                  <span>
                    <PersonIcon htmlColor="#eb8f34" />{" "}
                  </span>
                  Online Now !
                </p>
              </div>
            </Grid>
          </div>
        </Grid>
      </Card>

      <Box className={profileStyles.profile__contact}>
        <p className={profileStyles.profile__contact__header}>
          Contacting Cris | Links
        </p>
        <Grid container spacing={1} className={profileStyles.profile__grid}>
          <Grid item xs={6}>
            <Link href="https://www.linkedin.com/in/cristophercunas/">
              <a className={profileStyles.profile__contact__link}>
                <LinkedInIcon htmlColor="#03adfc" /> LinkedIn{" "}
              </a>
            </Link>
          </Grid>
          <Grid item xs={6}>
            <Link href="https://github.com/criscunas">
              <a className={profileStyles.profile__contact__link}>
                {" "}
                <GitHubIcon htmlColor="black" /> GitHub{" "}
              </a>
            </Link>
          </Grid>
          <Grid item xs={6}>
            <Link href="https://leetcode.com/criscunas/">
              <a className={profileStyles.profile__contact__link}>
                {" "}
                <CodeIcon htmlColor="black" /> LeetCode
              </a>
            </Link>
          </Grid>
          <Grid item xs={6}>
            <Link href="https://twitter.com/criscunas">
              <a className={profileStyles.profile__contact__link}>
                <TwitterIcon htmlColor="#03adfc" /> Twitter{" "}
              </a>
            </Link>
          </Grid>
          <Grid item xs={12}>
            <p className={profileStyles.profile__contact__link}>
              <AlternateEmailIcon htmlColor="#03adfc" />
              cristophercunas@icloud.com{" "}
            </p>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
