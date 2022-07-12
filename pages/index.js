import { getAllPosts } from "../lib/api";
import ProfileCard from "../src/components/ProfileCard/ProfileCard";
import { AboutMe } from "../src/components/AboutMe/AboutMe";
import MyBlogs from "../src/components/MyBlogs/MyBlogs";
import { ProjectSection } from "../src/components/ProjectSection/ProjectSection";

export async function getStaticProps() {
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
        <div>
            <ProfileCard />
            <AboutMe />
            <ProjectSection />
            <MyBlogs posts={allPosts} />
        </div>
    );
}
