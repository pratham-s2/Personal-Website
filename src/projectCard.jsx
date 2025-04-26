import { Github } from "lucide-react";
import TechnologyTag from "./technologyTag";
function ProjectCard ({projectName, projectDescription, technologies, link}){
    return(
        <div className="flex flex-col p-5 rounded-lg relative bg-white dark:bg-black 
        dark:hover:bg-[#141414] hover:border-black border dark:hover:border-white
        dark:border-white border-black/30 z-10 transition ease-in-out duration-300">
            
            <div className="text-lg font-medium">
                {projectName}
            </div>
            
            <div className="text-sm dark:text-white/80 text-black/80 pr-9">
                {projectDescription}
            </div>
            
            <div className="mt-2 flex flex-row gap-1 flex-wrap">
                {
                    technologies.map((technology, index)=> <TechnologyTag text={technology.text} bg_col={technology.bg_col} 
                    text_col={technology.text_col} key={index}/>)
                }
            </div>
            
            
            <a href={link} target="_blank" rel="noopener norefferer">
                <Github className="w-7 h-7 absolute top-4 right-4 dark:hover:text-white p-1 dark:text-white/70 text-black/70 hover:text-black"/>
            </a>
        </div>
    )
}

export default ProjectCard;