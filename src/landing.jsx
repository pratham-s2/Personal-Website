import { FileText, Mail, Github, Linkedin, ExternalLink } from "lucide-react"
import ProjectCard from "./projectCard";
import { useState } from "react";

function Landing(){

    const [dark, setDark] = useState(true);

    function handleScroll(el){
        let info = document.getElementById(el);
        info.scrollIntoView({behavior: "smooth"})
    }

    function handleDarkMode(){
        if (dark){
            document.documentElement.classList.remove("dark");
            setDark(false);
        }
        else {
            document.documentElement.classList.add("dark");
            setDark(true);
        }
    }
    return(
        <div className="relative" id="hero">

            <button onClick={()=>handleScroll("hero")}
            className='md:fixed absolute sm:left-13 sm:top-6 lg:top-7 lg:left-16 top-3 left-3 text-pink-500 text-5xl md:text-4xl font-bold hover:text-pink-600'>PS</button>
            <button className="md:fixed absolute sm:right-13 sm:top-6 lg:top-7 lg:right-16 top-3 right-3" onClick={handleDarkMode}>
                <img src={dark ? "/light.svg" :  "/dark.svg"} 
                className="lg:w-5 lg:h-5 md:w-6 md:h-6 h-8 w-8 dark:lg:w-6 dark:lg:h-6 dark:md:w-6 dark:md:h-6 dark:h-8 dark:w-8 hover:translate-y-[-2px] transition ease-in-out duration-300"/>
            </button>
            
            <div className="w-full max-w-[28rem] sm:max-w-[32rem] md:max-w-[36rem] lg:max-w-[50rem] px-10 sm:px-0 mx-auto pt-30 2xl:pt-60">
            
                
                <div className="px-2 pt-10 pb-10 gap-4 flex md:flex-row md:text-start text-center flex-col items-center mx-auto rounded-3xl">
                    <img src="/pratham-img.png" alt="pratham-photo" draggable='false'
                    className="object-contain h-44 w-44 rounded-3xl"/>
                    
                    <div className="flex flex-col justify-center">
                        <p className="text-3xl mb-1">I'm <span className="font-semibold text-4xl text-pink-500">Pratham</span>.</p>
                        <p className="text-xl">Engineering @ UWaterloo</p>
                        <p className="text-black/85 dark:text-white/85 py-1 text-lg">I'm a curious learner who enjoys building things. 
                            My interests lie in full-stack web development and Project Management. 
                            I like working on projects that challenge me and help me grow my skills in these fields.</p>
                    </div>
                </div>
                <div className="flex flex-row justify-center w-full">
                    <p className="sm:mb-1 sm:text-lg font-medium text-xl text-center mb-6">Feel free to reach out if you’d like to connect or collaborate!</p>
                </div>
                <div className="sm:flex sm:flex-row grid grid-cols-2 gap-2 mt-1 mx-auto w-max">
                        <a href="mailto:p97shah@uwaterloo.ca" target="_blank" rel="noopener noreferrer">
                            <button className="flex flex-row gap-2 items-center rounded-lg px-4 py-2 hover:underline 
                            font-semibold transition duration-300 ease-in-out hover:translate-y-[-2px]">
                                <Mail className="w-5 h-5"/>Contact
                            </button>
                        </a>
                        <a href="https://github.com/pratham-s2" target="_blank" rel="noopener noreferrer">
                            <button className="flex flex-row gap-2 items-center rounded-lg px-4 py-2 hover:underline
                            font-semibold transition duration-300 ease-in-out hover:translate-y-[-2px]">
                                <Github className="w-5 h-5"/>GitHub
                            </button>
                        </a>
                        <a href="https://www.linkedin.com/in/prathamshah11" target="_blank" rel="noopener noreferrer">
                            <button className="flex flex-row gap-2 items-center rounded-lg px-4 py-2 hover:underline
                            font-semibold transition duration-300 ease-in-out hover:translate-y-[-2px]">
                                <Linkedin className="w-5 h-5"/>LinkedIn
                            </button>
                        </a>
                        <a>
                            <button className="flex flex-row gap-2 items-center hover:underline rounded-lg px-4 py-2 
                                font-semibold transition duration-300 ease-in-out hover:translate-y-[-2px]" title="Will be added soon.">
                                <FileText className="w-5 h-5"/>Resume
                            </button>
                        </a>
                            
                       
                </div>        
                <div className="w-full text-center
                 mt-25">
                    <button onClick={()=>handleScroll("info")} className="w-max rounded-lg"><img src={dark ? "/downDark.svg" : "/downLight.svg"} alt="scroll down" draggable="false"
                    className="w-8 h-8 hover:w-9 hover:scale-110 transition ease-in-out duration-500"/></button>
                </div>

                <div className="pt-18 mt-26 2xl:mt-40" id="info">
                    
                    <div className="flex items-center gap-2 mb-6">
                        <div className="h-px grow dark:bg-white/15 bg-black/45"></div>
                        <h3 className="text-xl font-semibold text-pink-500">Things I've Built</h3>
                        <div className="h-px grow dark:bg-white/15 bg-black/45"></div>
                    </div>
                    
                    <div className="flex flex-col gap-5 relative">

                        <div className="w-96 h-60 border-l-6 border-pink-500 rounded-full absolute z-0 top-14 left-[-40px]"></div>
                        <div className="w-96 h-60 border-r-6 border-pink-500 rounded-full absolute z-0 top-58 right-[-40px]"></div>
                        
                        <ProjectCard projectName="EvenShare" link="https://github.com/pratham-s2/EvenShare"
                        projectDescription="A group-focused expense-splitting platform that lets users track, organize, and settle 
                        shared costs with ease. Functionality includes real-time expense logging, group creation, and clear debt 
                        breakdowns. Each user has an account to manage their activity and contributions across multiple groups." 
                        technologies={[
                            {text: "React", bg_col: "bg-blue-950/30", text_col: "text-blue-300"},
                            {text: "Tailwind CSS", bg_col: "bg-red-950/30", text_col: "text-red-300"},
                            {text: "Javascript", bg_col: "bg-yellow-950/30", text_col: "text-yellow-300"}, 
                            {text: "Express.js", text_col: "bg-green-950/30", bg_col: "text-green-300"},
                            {text: "MySQL", text_col: "text-pink-300", bg_col: "bg-pink-950/30"},
                            {text: "Websockets", bg_col: "bg-orange-950/30", text_col: "text-orange-300"},

                            ]}/>
                        <ProjectCard projectName="Recipify" link="https://github.com/pratham-s2/Recipify"
                        projectDescription="A recipe discovery platform featuring 1,000+ recipes stored in a MySQL database, 
                        enabling fast, filterable search based on dietary preferences and ingredients. It supports features 
                        like saved collections and automated shopping list generation, helping users streamline meal prep and 
                        grocery planning" 
                        technologies={[
                            {text: "React", bg_col: "bg-blue-950/30", text_col: "text-blue-300"},
                            {text: "Tailwind CSS", bg_col: "bg-red-950/30", text_col: "text-red-300"},
                            {text: "Javascript", bg_col: "bg-yellow-950/30", text_col: "text-yellow-300"},
                            {text: "Express.js", text_col: "bg-green-950/30", bg_col: "text-green-300"},
                            {text: "MySQL", text_col: "text-pink-300", bg_col: "bg-pink-950/30"}
                        ]}/>
                        
                        <ProjectCard projectName="Personal Website" link="https://github.com/pratham-s2/Personal-Website" 
                        projectDescription="The website you're looking at right now!" 
                        technologies={[
                            {text: "React", bg_col: "bg-blue-950/30", text_col: "text-blue-300"},
                            {text: "Tailwind CSS", bg_col: "bg-red-950/30", text_col: "text-red-300"},
                            {text: "Javascript", bg_col: "bg-yellow-950/30", text_col: "text-yellow-300"},
                        ]}/>
                    </div>
                </div>

                <div className="mt-11 relative">
                    <div className="flex items-center gap-2 mb-6">
                        <div className="h-px grow dark:bg-white/15 bg-black/45"></div>
                        <h3 className="text-xl font-semibold text-pink-500">Experiences</h3>
                        <div className="h-px grow dark:bg-white/15 bg-black/45"></div>
                    </div>
                    <div className="flex flex-col gap-5">
                        
                        <div className="flex flex-col w-full p-5 bg-white dark:bg-black dark:hover:bg-[#141414] transition ease-in-out duration-300 rounded-lg relative border
                        hover:border-black border-black/30 dark:border-white dark:hover:border-white">
                            <div className="text-lg font-medium">Software Developer</div>
                            <div className="text-sm dark:text-white/80 text-black/80 mt-1 flex flex-row items-center justify-between pr-11 gap-3"><span>Industry 4.0 Design</span><span>Sept. 2024 - Present</span></div>
                            <div className="text-sm dark:text-white/80 text-black/80 mt-2 pr-8">
                            Collaborated with a team to build and deploy the Industry 4.0 Design Team website, turning Figma designs into a fast, user-friendly interface.
                            </div>
                            <div className="mt-2 flex flex-wrap gap-2">
                                <span className="px-2 py-1 rounded-md dark:bg-blue-950/30 dark:text-blue-300 bg-blue-100 text-blue-800 text-sm">React</span>
                                <span className="px-2 py-1 rounded-md dark:bg-red-950/30 dark:text-red-300 bg-red-100 text-red-800 text-sm">Tailwind CSS</span>
                                <span className="px-2 py-1 rounded-md dark:bg-green-950/30 dark:text-green-300 bg-green-100 text-green-800 text-sm">Jira</span>
                                <span className="px-2 py-1 rounded-md dark:bg-yellow-950/30 dark:text-yellow-300 bg-yellow-100 text-yellow-800 text-sm">Agile</span>
                                <span className="px-2 py-1 rounded-md dark:bg-pink-950/30 dark:text-pink-300 bg-pink-100 text-pink-800 text-sm">Git</span>
                                <span className="px-2 py-1 rounded-md dark:bg-orange-950/30 dark:text-orange-300 bg-orange-100 text-orange-800 text-sm">UI/UX</span>
                            </div>

                            <a href="https://uwindustry4.tech" target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="w-9 h-9 absolute top-4 right-4 dark:hover:text-white p-2 rounded-lg dark:text-white/70 hover:text-black text-black/80" />
                            </a>
                        </div>


                        <div className="flex flex-col p-5 bg-white dark:bg-black dark:hover:bg-[#141414] transition ease-in-out duration-300 rounded-lg relative border
                        hover:border-black border-black/30 dark:border-white dark:hover:border-white">
                            <div className="text-lg font-medium">Project Management Intern</div>
                            <div className="text-sm dark:text-white/80 text-black/80 mt-1 flex flex-row items-center justify-between pr-11 gap-3"><span>Hooper Welding</span><span>Apr. 2025 - Aug. 2025</span></div>
                            <div className="text-sm dark:text-white/80 text-black/80 mt-2">Supporting mechanical design and project planning for custom manufacturing solutions.</div>
                            <div className="mt-2 flex flex-wrap gap-1">
                                <span className="px-2 py-1 rounded-md dark:bg-green-950/30 dark:text-green-300 bg-green-100 text-green-800 text-sm">Project Planning</span>
                                <span className="px-2 py-1 rounded-md dark:bg-blue-950/30 dark:text-blue-300 bg-blue-100 text-blue-800 text-sm">Client Communication</span>
                                <span className="px-2 py-1 rounded-md dark:bg-orange-950/30 dark:text-orange-300 bg-orange-100 text-orange-800 text-sm">Cross-Functional Teams</span>
                                <span className="px-2 py-1 rounded-md dark:bg-yellow-950/30 dark:text-yellow-300 bg-yellow-100 text-yellow-800 text-sm">AutoDesk Inventor</span>
                                                           
                            </div>
                        </div>

                    </div>
                </div>


            </div>

            {/* Footer */}
            <hr className="border-px dark:border-white/15 border-black/45 w-full max-w-[22rem] sm:max-w-[28rem] md:max-w-[36rem] lg:max-w-[50rem] px-6 sm:px-0 mx-auto mt-8"/>
            <div className="text-center text-xs mt-[3px]">
                <p className="py-3">made by pratham shah</p>
            </div>
        </div>
    )
}

export default Landing;