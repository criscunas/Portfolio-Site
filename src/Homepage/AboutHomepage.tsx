import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import Link from "next/link";

export const AboutHomepage = () => {
    return (
        <div className="mt-6 md:mt-8">
            <div className="text-white flex flex-col gap-2 text-center">
                <h1 className="text-2xl font-semibold">hey i'm cris <span role="img" aria-label="thumbs-up">👋 </span></h1>
                <p className="text-md md:mt-1.5">Software Engineer</p>
            </div>

            <div className="mt-6 flex justify-center items-center divide-x-4">
                <Link href="https://www.linkedin.com/in/cristophercunas/">
                    <a className='px-4'>
                        <LinkedInIcon
                            fontSize="large"
                            htmlColor="white"
                        />
                    </a>
                </Link>
                <Link href="https://github.com/criscunas">
                    <a className='px-4'>
                        <GitHubIcon
                            fontSize="large"
                            htmlColor="white"
                        />
                    </a>
                </Link>
                <Link href="mailto:criscunas@criscunas.dev?subject=Hello!">
                    <a className='px-4'>
                        <AlternateEmailIcon
                            fontSize="large"
                            htmlColor="white"
                        />
                    </a>
                </Link>
            </div>

            <div className="mt-10">

                <div>
                    <h1 className="text-slate-100 text-2xl tracking-wider underline decoration-white underline-offset-4">Bio</h1>
                    <div className='rounded-sm mt-3.5 py-4'>
                        <h1 className="text-[1rem] leading-7 text-white">Full Stack Developer based out of Newark, NJ.
                            Currently a intern @ Streamforge. Primarily working
                            with Javascript. Favorite frameworks include Vue & Next.
                            Always learning & looking for ways to better my craft.
                        </h1>
                    </div>
                </div>

                <div className="my-4 md:grid grid-cols-2 text-white md:my-6">
                    <div>
                        <h1 className="text-2xl tracking-wider underline underline-offset-8">Frontend</h1>
                        <div className='my-6 md:mt-8'>
                            <div className="mb-2 md:mb-4 flex justify-center divide-x-4 divide-cyan-400">
                                <p className="px-2 text-lg">Vue</p>
                                <p className="px-2 text-lg">React</p>
                                <p className="px-2 text-lg">Next</p>
                            </div>
                            <div className="flex justify-center divide-x-4 divide-cyan-400">
                                <p className="px-2 text-md">Tailwind</p>
                                <p className="px-2 text-md">CSS/SCSS</p>
                                <p className="px-2 text-md">Material UI</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h1 className="text-2xl underline tracking-wider underline-offset-8">Backend</h1>
                        <div className="mt-6 md:mt-8">
                        <div className="mb-2 md:mb-4 flex justify-center divide-x-4 divide-cyan-400">
                            <p className="px-2 text-lg">Node</p>
                            <p className="px-2 text-lg">Express</p>
                            <p className="px-2 text-lg">SQL</p>
                        </div>
                        <div className="flex justify-center divide-x-4 divide-cyan-400">
                            <p className="px-2 text-md">MongoDB</p>
                            <p className="px-2 text-md">Authentication</p>
                            <p className="px-2 text-md">API's</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
