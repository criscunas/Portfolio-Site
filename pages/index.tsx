import { getAllPosts } from "../lib/api";
import { GetStaticProps } from "next";
import { AboutHomepage } from "../src/Homepage/AboutHomepage";
import { ProjectsHomepage } from "../src/Homepage/ProjectsHomepage";
import { BlogsHomepage } from "../src/Homepage/BlogsHomepage";

export const getStaticProps: GetStaticProps = async() => {
        const allPosts = getAllPosts([
        "title",
        "date",
        "slug",
        "author",
        "excerpt",
    ]);

    return {
        props: { allPosts },
    };
}

export default function Home({ allPosts }) {
    return (
        <div className="max-w-xl m-auto">
            <AboutHomepage />
            <ProjectsHomepage/>
            <BlogsHomepage blogs={allPosts} />
        </div>
    );
}
