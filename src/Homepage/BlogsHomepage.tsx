import {BlogsCard} from '../../src/components/BlogsCard';

type propData = {
    blogs : {
        title: string,
        date: string,
        slug: string,
        author:string,
        excerpt:string,
    }[],
}

export const BlogsHomepage = ({blogs} : propData) => {
    return (
        <div>
            <h1 className="text-2xl mt-6 mb-4 tracking-wider underline underline-offset-8 text-white">Posts</h1>
            <div className='md:grid grid-cols-2 gap-x-12'>
                {blogs.map((ele, index) => {
                    return (
                        <div key={index}>
                            <BlogsCard card = {ele}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}