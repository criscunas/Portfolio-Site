import style from './ProjectCard.module.scss';
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { Card, Button } from "@material-ui/core";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from 'next/link';
import { useRouter } from "next/router";


export const ProjectCard = ({title, git, mainText, features, link, url, display}) => {
  
  const Router = useRouter()

  const NavTo = (url) => {
    return (
      <Link href={url} passHref={true}>
        <a>
          <GitHubIcon htmlColor="black" />{" "}
        </a>
      </Link>
    );
  };
  
  return (
    <Card className={style.project__card}>
      <div className={style.project__title}>
        <h1 className={style.project__title_text}> {title} </h1>
        {NavTo(git)}
      </div>

      {!link ? null : (
        <div className={style.project__title_link}>
          <Link href={url}>
            <a> {display}</a>
          </Link>
        </div>
      )}

      <div className={style.project__main}>
        <p className={style.project__main_text}>{mainText}</p>
        <h2 className={style.project__main_subhead}>Notable Features</h2>
        <ul className={style.project__main_list}>
          <li> {features[0]} </li>
          <li> {features[1]} </li>
          <li> {features[2]} </li>
        </ul>
        <div className={style.project__main_footer}>
          <Button
            variant="string"
            size="small"
            endIcon={<DoubleArrowIcon />}
            style={{ backgroundColor: "#E1CE7A" }}
            onClick={() => Router.push(link)}
          >
            <p className={style.project__button}> Learn More </p>
          </Button>
        </div>
      </div>
    </Card>
  );
}