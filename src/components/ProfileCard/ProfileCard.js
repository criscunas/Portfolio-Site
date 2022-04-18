import Image from 'next/image';
import profileStyles from "./ProfileCard.module.scss";
import {
  Card,
  CardContent, 
  CardMedia,
  CardHeader,
  Box,
  Grid
} from "@material-ui/core";
import PersonIcon from "@mui/icons-material/Person";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import CodeIcon from "@mui/icons-material/Code";

export default function ProfileCard() {

  const profilePhoto = () => {
    return (
      <Image
        src="/images/profile.jpg"
        alt="profile-photo"
        width={145}
        height={140}
      />
    );
  }

  return (
    <Box className={profileStyles.profile}>
        <h1 className={profileStyles.profile__name} >Cristopher Cunas</h1>
        <div className={profileStyles.profile__body}>
          {profilePhoto()}
          <div className={profileStyles.profile__bio}>
            <div className={profileStyles.profile__bio__text}>
              <p> "Welcome <span role="img" aria-label="thumbs-up"> 👋 </span> "</p>
              25 years old
              <br/>
              Newark,
              <br/>
              New Jersey
              <br/>
              United States
              <br />
              <p className={profileStyles.profile__bio__status} > <span> <PersonIcon htmlColor='#eb8f34' /> </span> Online Now ! </p>
            </div>
          </div>
        </div>
        <div className={profileStyles.profile__current} > 
          <p className={profileStyles.profile__current__mood} > <span className={profileStyles.profile__span} > Mood: </span> Productive <span role="img" aria-label="thumbs-up">👍 </span></p>
          <p className={profileStyles.profile__current__blog} > <span className={profileStyles.profile__span} > View My: </span> Projects </p>
        </div>
        <Box className={profileStyles.profile__contact}>
          <p className={profileStyles.profile__contact__header} > Contacting Cris | Links </p>
          <Grid container spacing={1} className = {profileStyles.profile__grid} >
            <Grid item xs={6}>
              <p className={profileStyles.profile__contact__link} > <span> <LinkedInIcon/> </span> LinkedIn</p>
            </Grid>
            <Grid item xs={6}>
              <p className={profileStyles.profile__contact__link}> <span> <GitHubIcon htmlColor = "black"/> </span> Github</p>
            </Grid>
            <Grid item xs = {6}>
              <p className={profileStyles.profile__contact__link} > <span> <CodeIcon htmlColor ="black"/> </span> Leetcode</p>
            </Grid>
              <Grid item xs = {6}>
              <p className={profileStyles.profile__contact__link} > <span> <TwitterIcon htmlColor ="#03adfc" /> </span> Twitter</p>
            </Grid>
          </Grid>
        </Box>
    </Box>
  );
}
