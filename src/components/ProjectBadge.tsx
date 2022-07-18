type propData = {
    name : string ,
    bg_color : string,
}



export const ProjectBadge = ({name, bg_color} : propData) => {
    return (
        <div style = {{backgroundColor: bg_color}}
            className="w-fit rounded px-2">
            <p className="font-bold text-sm"> {name} </p>
        </div>
    )
}