import projectStyle from "./ProjectSection.module.scss";
import {
  Box,
  Button,
  Card,
} from "@material-ui/core";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";;
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import {useRouter} from "next/router";

export default function Projects() {

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
    <Box id="projects" className={projectStyle.project}>
      <h1 className={projectStyle.project__header}> Projects </h1>
      <Card className={projectStyle.project__section}>
        <div className={projectStyle.project__title}>
          <h1 className={projectStyle.project__title_text}> digi </h1>
          {NavTo("https://github.com/criscunas/digi-client")}
        </div>

        <div className={projectStyle.project__main}>
          <p className={projectStyle.project__main_text}>
            A Social Media/Forum platform where users can connect & interact
            with each other.
          </p>
          <h2 className={projectStyle.project__main_subhead}>
            {" "}
            Notable Features
          </h2>
          <ul className={projectStyle.project__main_list}>
            <li>User registration, login & authentication.</li>
            <li>Users can follow each other & recieve a customized feed.</li>
            <li>Blog hosting & dedicated space for community threads.</li>
          </ul>
          <div className={projectStyle.project__main_footer}>
            <Button
              variant="string"
              size="small"
              endIcon={<DoubleArrowIcon />}
              style={{ backgroundColor: "#E1CE7A" }}
              onClick={() => Router.push("/digi")}
            >
              <p className={projectStyle.project__button}> Learn More </p>
            </Button>
          </div>
        </div>
      </Card>

      <Card className={projectStyle.project__section}>
        <div className={projectStyle.project__title}>
          <h1 className={projectStyle.project__title_text}> MealDishr </h1>
          {NavTo("https://github.com/criscunas/MealDishrNext")}
        </div>

        <div className={projectStyle.project__title_link}>
          <Link href="https://meal-dishr-next.vercel.app/">
            <a> meal-dishr-next.vercel.app</a>
          </Link>
        </div>

        <div className={projectStyle.project__main}>
          <p className={projectStyle.project__main_text}>
            A meal generator application that provides you with meal
            instructions, measurements & a video on how to prepare the meal of
            your choice.
          </p>
          <h2 className={projectStyle.project__main_subhead}>
            {" "}
            Notable Features
          </h2>
          <ul className={projectStyle.project__main_list}>
            <li>Detailed instuctions on each meal.</li>
            <li>Wide variety to choose from.</li>
            <li>Offers a button to randomley generate a meal. </li>
          </ul>
          <div className={projectStyle.project__main_footer}>
            <Button
              variant="string"
              size="small"
              endIcon={<DoubleArrowIcon />}
              style={{ backgroundColor: "#E1CE7A" }}
              onClick={() => Router.push("/MealDishr")}
            >
              <p className={projectStyle.project__button}> Learn More </p>
            </Button>
          </div>
        </div>
      </Card>

      <Card className={projectStyle.project__section}>
        <div className={projectStyle.project__title}>
          <h1 className={projectStyle.project__title_text}> Personal Site </h1>
          {NavTo("https://github.com/criscunas/Portfolio-Site")}
        </div>

        <div className={projectStyle.project__main}>
          <p className={projectStyle.project__main_text}>
            My personal website where I am able to display previous work & also
            manage my blog.
          </p>
          <h2 className={projectStyle.project__main_subhead}>
            Notable Features
          </h2>
          <ul className={projectStyle.project__main_list}>
            <li>Fully Responsive. </li>
            <li>Uses three.js for the header. </li>
            <li> Routing for blogs & projects. </li>
          </ul>
          <div className={projectStyle.project__main_personal}>
            <Link
              href="https://github.com/criscunas/Portfolio-Site"
              passHref={true}
            >
              <a>
                Click on me or on GitHub icon for repo{" "}
                <span aria-label="rocket">🚀</span>
              </a>
            </Link>
          </div>
        </div>
      </Card>
    </Box>
  );
}


