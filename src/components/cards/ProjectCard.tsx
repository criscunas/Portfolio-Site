import { useRouter } from "next/router";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import {ProjectBadge} from '../ProjectBadge';
import ReadMoreIcon from '@mui/icons-material/ReadMore';

type propData = {
    project : {
        title : string,
        git: string,
        description : string,
        features : string[],
        link : string,
        stack: {
            name: string,
            bg_color: string,
        }[],
    };
}

export const ProjectCard = ({project}: propData) => {

    const Router = useRouter();

    const navigateTo = (url : string) => {
        return (
            <Link href={url} passHref={true}>
                <a>
                    <GitHubIcon htmlColor="white" />
                </a>
            </Link>
        );
    };

    return (
        <div className="card max-w-96 rounded bg-[#171614] shadow-md text-neutral-content my-4">
            <div className="p-4">
                <div className="flex items-center justify-between border-b-2 pb-3">
                    <div className="flex items-center gap-4">
                        <h1 className="text-lg md:text-xl text-slate-100 font-semibold">{project.title} </h1>
                        <div>{navigateTo(project.git)}</div>
                    </div>

                    <div>
                        <button
                            className="bg-blue-500 hover:bg-blue-600 rounded px-2.5 py-1 flex items-center gap-2"
                            onClick={() => Router.push(project.link)}
                        >
                            <span className="sm:hidden md:font-semibold text-md text-white"> Learn more </span>
                            <ReadMoreIcon fontSize="small" htmlColor="white" />
                        </button>
                    </div>
                </div>

                <div className="my-4 flex gap-4 flex-wrap">
                    {project.stack.map((ele : {name: string, bg_color: string} , index : number) => {
                        return (
                            <ProjectBadge
                                key={index}
                                name={ele.name}
                                bg_color={ele.bg_color}
                            />
                        )
                    })}
                </div>

                <div className="my-3.5 md:my-5">
                    <h1 className="text-white md:text-[1rem] leading-6">{project.description} </h1>
                </div>

                <div className="break-all">
                    <h1 className="text-white text-[1rem] font-semibold mb-2.5">Notable Features</h1>

                    <div className="mockup-code text-white">
                        <ul className="list-disc px-4">
                            {project.features.map((ele, index: number) => {
                                return (
                                    <li key={index} className="py-2">
                                        <div data-prefix="$" className="">
                                            <code className="break-words">{ele}</code>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                </div>


            </div>
        </div>
    )
}
