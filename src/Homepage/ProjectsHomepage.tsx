import data from '../../public/data/projectHomepage.json';
import { ProjectCard} from '../components/cards/ProjectCard';

export const ProjectsHomepage = () => {
    return (
        <div className='pt-6 md:pt-2'>
            <h1 className="tracking-wider text-2xl underline underline-offset-8 text-white">My Work</h1>

            <div className='mt-8'>
                {data.map((ele, index) => {
                    return (
                        <div key={index}>
                            <ProjectCard project={ele} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
