import { FileText, Mail, Github, Linkedin, ExternalLink } from "lucide-react"
import ProjectCard from "./projectCard";

function Landing(){

    function handleScroll(el){
        let info = document.getElementById(el);
        info.scrollIntoView({behavior: "smooth"})
    }
    return(
        <div className="relative" id="hero">

            <button onClick={()=>handleScroll("hero")}
            className='fixed top-7 left-16 text-pink-500 text-4xl font-bold hover:text-pink-600'>PS</button>
            <button className="text-white fixed top-10 right-16">DARK MODE</button>
            
            <div className="w-200 mx-auto pt-24">
                
                <div className="px-2 pt-50 pb-10 gap-4 flex flex-row items-center mx-auto rounded-3xl">
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
                <p className="w-max mx-auto pb-1 text-lg font-medium">Feel free to reach out if you’d like to connect or collaborate!</p>

                <div className="flex flex-row gap-2 mt-1 mx-auto w-max">
                        <a href="mailto:p97shah@uwaterloo.ca" target="_blank" rel="noopener noreferrer">
                            <button className="flex flex-row gap-2 items-center bg-black border border-[#2b2b2b] rounded-lg px-4 py-2 
                            hover:bg-[#2b2b2b] font-semibold transition duration-300 ease-in-out hover:shadow hover:translate-y-[-2px]">
                                <Mail className="w-5 h-5"/>Contact
                            </button>
                        </a>
                        <a href="https://github.com/pratham-s2" target="_blank" rel="noopener noreferrer">
                            <button className="flex flex-row gap-2 items-center bg-black border border-[#2b2b2b] rounded-lg px-4 py-2 
                            hover:bg-[#2b2b2b] font-semibold transition duration-300 ease-in-out hover:shadow hover:translate-y-[-2px]">
                                <Github className="w-5 h-5"/>GitHub
                            </button>
                        </a>
                        <a href="https://www.linkedin.com/in/prathamshah11" target="_blank" rel="noopener noreferrer">
                            <button className="flex flex-row gap-2 items-center bg-black border border-[#2b2b2b] rounded-lg px-4 py-2 
                            hover:bg-[#2b2b2b] font-semibold transition duration-300 ease-in-out hover:shadow hover:translate-y-[-2px]">
                                <Linkedin className="w-5 h-5"/>LinkedIn
                            </button>
                        </a>
                        
                            <button className="flex flex-row gap-2 items-center text-white/50 bg-black border border-[#2b2b2b] rounded-lg px-4 py-2 
                            hover:bg-[#2b2b2b] font-semibold transition duration-300 ease-in-out hover:shadow hover:translate-y-[-2px]" title="Will be added soon.">
                                <FileText className="w-5 h-5"/>Resume
                            </button>
                       
                </div>        
                <div className="w-full text-center
                 mt-44">
                    <button onClick={()=>handleScroll("info")} className="w-max rounded-lg"><img src="/down.svg" alt="scroll down" draggable="false"
                    className="w-8 h-8 hover:w-9 hover:scale-110 transition ease-in-out duration-500"/></button>
                </div>

                <div className="pt-18 mt-26" id="info">
                    
                    <div className="flex items-center gap-2 mb-6">
                        <div className="h-px grow bg-white/15"></div>
                        <h3 className="text-xl font-semibold text-pink-500">Things I've Built</h3>
                        <div className="h-px grow bg-white/15"></div>
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
                        <div className="h-px grow bg-white/15"></div>
                        <h3 className="text-xl font-semibold text-pink-500">Experiences</h3>
                        <div className="h-px grow bg-white/15"></div>
                    </div>
                    <div className="flex flex-col gap-5">
                        
                        <div className="flex flex-col w-200 p-5 bg-black hover:bg-[#141414] transition ease-in-out duration-300 rounded-lg relative border">
                            <div className="text-lg font-medium text-white">Software Developer</div>
                            <div className="text-sm text-white/80 mt-1 flex flex-row items-center justify-between pr-11 gap-3"><span>Industry 4.0 Design</span><span>Sept. 2024 - Present</span></div>
                            <div className="text-sm text-white/80 mt-2 pr-8">
                            Collaborated with a team to build and deploy the Industry 4.0 Design Team website, turning Figma designs into a fast, user-friendly interface.
                            </div>
                            <div className="mt-2 flex flex-wrap gap-2">
                                <span className="px-2 py-1 rounded-md bg-blue-950/30 text-blue-300 text-sm">React</span>
                                <span className="px-2 py-1 rounded-md bg-red-950/30 text-red-300 text-sm">Tailwind CSS</span>
                                <span className="px-2 py-1 rounded-md bg-green-950/30 text-green-300 text-sm">Jira</span>
                                <span className="px-2 py-1 rounded-md bg-yellow-950/30 text-yellow-300 text-sm">Agile</span>
                                <span className="px-2 py-1 rounded-md bg-pink-950/30 text-pink-300 text-sm">Git</span>
                                <span className="px-2 py-1 rounded-md bg-orange-950/30 text-orange-300 text-sm">UI/UX</span>
                            </div>

                            <a href="https://uwindustry4.tech" target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="w-9 h-9 absolute top-4 right-4 hover:text-white p-2 rounded-lg text-white/70" />
                            </a>
                        </div>


                        <div className="flex flex-col w-200 p-5 bg-black hover:bg-[#141414] rounded-lg transition ease-in-out duration-300 relative border">
                            <div className="text-lg font-medium text-white">Project Management Intern</div>
                            <div className="text-sm text-white/80 mt-1 flex flex-row items-center justify-between pr-11 gap-3"><span>Hooper Welding</span><span>Apr. 2025 - Aug. 2025</span></div>
                            <div className="text-sm text-white/80 mt-2">Supporting mechanical design and project planning for custom manufacturing solutions.</div>
                            <div className="mt-2 flex flex-wrap gap-1">
                                <span className="px-2 py-1 rounded-md bg-blue-950/30 text-blue-300 text-sm">Project Planning</span>
                                <span className="px-2 py-1 rounded-md bg-green-950/30 text-green-300 text-sm">Client Communication</span>
                                <span className="px-2 py-1 rounded-md bg-pink-950/30 text-pink-300 text-sm">Cross-Functional Teams</span>
                                <span className="px-2 py-1 rounded-md bg-orange-950/30 text-orange-300 text-sm">Autodesk Inventor</span>
                            </div>
                        </div>

                    </div>
                </div>


            </div>

            {/* Footer */}
            <hr className="border-px border-white/15 w-200 mx-auto mt-8"/>
            <div className="text-center text-xs mt-[3px]">
                <p className="py-3">made with react, tailwind & ❤️ by pratham shah</p>
            </div>
        </div>
    )
}

export default Landing;