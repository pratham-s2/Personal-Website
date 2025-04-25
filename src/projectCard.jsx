import { Github } from "lucide-react";
import TechnologyTag from "./technologyTag";
function ProjectCard ({projectName, projectDescription, technologies, link}){
    return(
        <div className="flex flex-col w-200 p-5 bg-black hover:bg-[#141414] rounded-lg relative border 
        border-white z-10 transition ease-in-out duration-300">
            
            <div className="text-lg font-medium">
                {projectName}
            </div>
            
            <div className="text-sm text-white/80 pr-9">
                {projectDescription}
            </div>
            
            <div className="mt-2 flex flex-row gap-1">
                {
                    technologies.map((technology, index)=> <TechnologyTag text={technology.text} bg_col={technology.bg_col} 
                    text_col={technology.text_col} key={index}/>)
                }
            </div>
            
            
            <a href={link} target="_blank" rel="noopener norefferer">
                <Github className="w-7 h-7 absolute top-4 right-4 hover:text-white p-1 text-white/70"/>
            </a>
        </div>
    )
}

export default ProjectCard;