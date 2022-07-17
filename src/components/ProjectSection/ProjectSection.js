import style from "./ProjectSection.module.scss";
import {Box} from "@material-ui/core";
import { ProjectCard } from "../ProjectCard";
import data from '../../../public/projectData';
import {v4 as uuidv4} from 'uuid';

export const ProjectSection = () => {

  return (
    <Box id="projects" className={style.project}>
      <h1 className={style.project__header}> Projects </h1>
      {data.projects.map(ele => {
        return (
          <ProjectCard
          key = {uuidv4()}
          title = {ele.title}
          git = {ele.git}
          mainText = {ele.mainText}
          features= {ele.features}
          link = {ele.link}
          url = {ele.url}
          display = {ele.display}
          />
        )
      })}
    </Box>
  );
}
