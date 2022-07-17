import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";
import { useRouter } from "next/router";

export const ProjectCard = ({
    title,
    git,
    mainText,
    features,
    link,
    url,
    display,
}) => {
    const Router = useRouter();

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
        <div className="card shadow-xl bg-white mb-6 rounded-xl">
            <div className="card-body p-8">
                <div className="flex items-center gap-4 pb-2">
                    <h1 className="card-title font-semibold text-3xl">
                        {" "}
                        {title}
                    </h1>
                    {NavTo(git)}
                </div>

                {!link ? null : (
                    <Link href={url}>
                        <a className="text-base cursor-pointer text-[#ED0707]">
                            {" "}
                            {display}
                        </a>
                    </Link>
                )}

                <div className="mt-4">
                    <h1 className="font-semibold text-lg"> {mainText} </h1>
                    <h2 className="my-4 font-semibold text-base">
                        {" "}
                        Notable features.
                    </h2>
                    <ul className="list-disc ml-4">
                        <li className="text-base mb-2"> {features[0]} </li>
                        <li className="text-base mb-2"> {features[1]} </li>
                        <li className="text-base mb-2"> {features[2]} </li>
                    </ul>
                    <div className="text-right mt-4">
                        <button
                            className="bg-[#E1CE7A] rounded-md py-2 px-3"
                            onClick={() => Router.push(link)}
                        >
                            <span className="text-md"> Learn more </span>{" "}
                            <DoubleArrowIcon />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
