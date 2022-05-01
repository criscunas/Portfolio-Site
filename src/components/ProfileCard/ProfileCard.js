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
import {useRouter} from 'next/router';


export default function ProfileCard() {

  const Router = useRouter();

  const profilePhoto = () => {
    return (
      <Image
        src="/images/profile.jpg"
        alt="profile-photo"
        width={130}
        height={150}
      />
    );
  }

  const scrollToProjects = () => {
    const section = document.getElementById('projects')
    section.scrollIntoView({behavior:'smooth', block: 'start'});
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
        <p className={profileStyles.profile__card_online}>
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
            <p className={profileStyles.profile__card_name}> Cristopher Cunas </p>
          </Grid>
          <Grid item xs={12} className={profileStyles.profile__card_body}>
            <div className={profileStyles.profile__image}>{profilePhoto()}</div>
            {profileBio()}
          </Grid>
          <Grid item xs={12}>
            <p className={profileStyles.profile__card_mood}>
              <span className={profileStyles.profile__card_mood_span}> Mood: </span>
              <span role="img" aria-label="thumbs-up">
                Productive 👍
              </span>
            </p>
            <h1 className={profileStyles.profile__card_footer}>
              View my:
              <span className={profileStyles.profile__footer_projects} onClick = {scrollToProjects} > Projects ||</span>{" "}
              <span onClick = {() => Router.push('/blogs')} className={profileStyles.profile__footer_blogs}> Blogs </span>{" "}
            </h1>
          </Grid>
        </Grid>
      </Card>

      <Card className={profileStyles.profile__tablet_card}>
        <Grid container>
          <div className={profileStyles.profile__tablet_card_body}>
            <Grid item xs={5}>
              {profilePhoto()}
            </Grid>
            <Grid item xs={7} className={profileStyles.profile__tablet_card_bio}>
              <p className={profileStyles.profile__tablet_card_name}>
                Cristopher Cunas
              </p>
              <div className={profileStyles.profile__tablet_card_welcome}>
                <p>
                  Welcome <span aria-label="wave">👋</span>
                </p>
                <p>
                  Mood: Working <span aria-label="thumbs-up"> 👍 </span>{" "}
                </p>
              </div>
              <div className={profileStyles.profile__tablet_card_location}>
                <p> 25 </p>
                <p> Newark, NJ, United States </p>
                <p className={profileStyles.profile__card_online}>
                  <span>
                    <PersonIcon htmlColor="#eb8f34" />{" "}
                  </span>
                  Online Now !
                </p>
              </div>
            </Grid>
          </div>
        </Grid>
        <h1 className={profileStyles.profile__tablet_card_footer}>
          View my :
          <span onClick = {scrollToProjects} className={profileStyles.profile__footer_projects}> Projects || </span>{" "}
          <span onClick = {() => Router.push('/blogs')} className={profileStyles.profile__footer_blogs}> Blogs </span>{" "}
          
        </h1>
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
