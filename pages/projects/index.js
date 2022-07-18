// import style from "../styles/ProjectPage.module.scss";
import { Box } from "@material-ui/core";
import Head from "next/head";
import data from "../../public/projectPageData";
import { ProjectPageDisplay } from "../../src/components/ProjectPageDisplay/ProjectPageDisplay";
import { v4 as uuidv4 } from "uuid";

export default function Projects() {
    const { projectData } = data;

    return (
        <div>
            <Head>
                <title>My Work</title>
                <meta property="og:title" content="My page title" key="title" />
            </Head>
            <Box id="projects" className="">
                {projectData.map((ele) => {
                    return (
                        <ProjectPageDisplay
                            key={uuidv4()}
                            title={ele.title}
                            link={ele.link}
                            url={ele.url}
                            description={ele.description}
                            page={ele.page}
                            images={ele.images}
                            stack={ele.stack}
                        />
                    );
                })}
            </Box>
        </div>
    );
}
