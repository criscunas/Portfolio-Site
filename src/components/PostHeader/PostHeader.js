import DateFormatter from "../date-formatter";
import postStyles from "../../../styles/Posts.module.scss";
import { Avatar } from "@material-ui/core";
import Image from "next/image";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from 'next/link';

export default function PostHeader({ title, date, author }) {
  
  const NavTo = (url , avatar) => {
    return (
      <Link as={url}>
        <a>
          {avatar}
        </a>
      </Link>
    );
  };

  const profilePhoto = () => {
    return (
      <Image
        src="/images/profile.jpg"
        alt="profile-photo"
        width={70}
        height={70}
        style={{ borderRadius: 100 }}
      />
    );
  };

  return (
    <div className={postStyles.post__header}>
      <div className={postStyles.post__avatar}>
        {profilePhoto()}
        <h1 className={postStyles.post__author}> {author} </h1>
      </div>
      <h1 className={postStyles.post__title}> {title} </h1>
      <div className={postStyles.post__date}>
        <DateFormatter dateString={date} />
        <div className= {postStyles.post__icons} >
          {NavTo(
            "https://github.com/criscunas",
            <GitHubIcon htmlColor="black" />
          )}
          {NavTo(
            "https://www.linkedin.com/in/cristophercunas/",
            <LinkedInIcon htmlColor="#60A5FA" />
          )}
        </div>
      </div>
    </div>
  );
}
