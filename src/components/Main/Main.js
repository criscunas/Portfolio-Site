import mainStyles from "./Main.module.scss";
import ProfileCard from "../ProfileCard/ProfileCard";
import { AboutMe } from "../AboutMe/AboutMe";
import MyBlogs from "../MyBlogs/MyBlogs";
import ProjectSection from "../ProjectSection/ProjectSection";

export const Main = ({ blogs }) => {
  return (
    <div className={mainStyles.main}>
      <ProfileCard />
      <AboutMe />
      <ProjectSection />
      <MyBlogs posts={blogs} />
    </div>
  );
};
