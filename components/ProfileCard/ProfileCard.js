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
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
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
      <Card className={profileStyles.profile__card}>
        <CardHeader title="Cristopher Cunas" />
        <div className={profileStyles.profile__body}>
          {profilePhoto()}
          <div className={profileStyles.profile__bio}>
            <div className={profileStyles.profile__bio__text}>
              <p> "Welcome !"</p>
              25 years old
              <br></br>
              Newark,
              <br></br>
              New Jersey
              <br></br>
              United States
            </div>
          </div>
        </div>
        <Box className={profileStyles.profile__contact}>
          <p className={profileStyles.profile__contact__header} > Contacting Cris </p>
          <Grid container spacing={1} className = {profileStyles.profile__grid} >
            <Grid item xs={6}>
              <p className={profileStyles.profile__contact__link} > <span> <EmailIcon/> </span> Message</p>
            </Grid>
            <Grid item xs={6}>
              <p className={profileStyles.profile__contact__link}> <span> <GitHubIcon/> </span> Github</p>
            </Grid>
            <Grid item xs = {6}>
              <p className={profileStyles.profile__contact__link} > <span> <LinkedInIcon/> </span> LinkedIn</p>
            </Grid>
              <Grid item xs = {6}>
              <p className={profileStyles.profile__contact__link} > <span> <CodeIcon/> </span> LeetCode</p>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </Box>
  );
}
