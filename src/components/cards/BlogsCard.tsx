import DateFormatter from '../../../lib/date-formatter'
import {useRouter} from 'next/router';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

type propData = {
    card : {
        title: string,
        date: string,
        slug: string,
        author:string,
        excerpt:string,
    }

}

export const BlogsCard = ({card} : propData) => {

    const Router = useRouter()

    return (
        <div className="bg-slate-100 my-3.5 rounded-sm p-4">
            <h1 className="text-black font-semibold text-md mb-1"> {card.title }</h1>
            <div className="flex items-center justify-between">
                <DateFormatter dateString={card.date} />
                <button className="bg-blue-500 hover:bg-blue-600 rounded px-1.5 py-1 flex items-center gap-2"
                    onClick={() => Router.push(`posts/${card.slug}`)}>
                    <span className="font-semibold text-md text-white">Read</span>
                </button>
            </div>
        </div>
    )
}