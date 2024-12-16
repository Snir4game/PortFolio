import React, {useState,useEffect} from "react";
import "./ProjectSection.css";
import GameHubPic from "../Pics/GameHub.png";
import ValoranApp from "../Pics/ValorantPic.png";
import portfolio from "../Pics/PortFolio.png";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ProjectsSection = () => {

    const projects = [
        {
            id:1,
            name: "GameHub",
            description: "A platform for gamers to search for games and add them to their library a new games and old games.",
            technologies: ["React","Firebase","JavaScript"],
            image: GameHubPic,
            link: "https://github.com/Snir4game/GameHub"
        },
        {
            id:2,
            name: "Valorant App",
            description: "A platform for Valorant players to search for agents and weapons and learn about them.",
            technologies: ["React-Native","Firebase","JavaScript","React-Element"],
            image: ValoranApp,
            link: "https://github.com/Snir4game/ValorantApp",
        },
        {
            id:3,
            name: "My Portfolio",
            description: "My Portfolio website that I built to show my projects and skills.",
            technologies: ["CSS","React","BootStrap"],
            image: portfolio,
            link: "https://github.com/Snir4game/portfolio"
        }
        
    ];


    const [currectProject, setCurrectProject] = useState(null);
    const [projectHistory, setProjectHistory] = useState([]);

    const getRandomeProject = () => {
        const availableProjects = projects.filter(
            project => project.id !==(currectProject?.id || null)
        );
        const projectToChooseFrom = availableProjects.length > 0
        ? availableProjects
        : projects;

        const randomProject =
            projectToChooseFrom[Math.floor(Math.random() * projectToChooseFrom.length)];


        setProjectHistory(perv =>[...perv, currectProject].filter(Boolean));
        setCurrectProject(randomProject);
    };

    const getToPreviousProject = () => {
        if(projectHistory.length > 0){ 
        const previousProject = projectHistory[projectHistory.length - 1];
            setProjectHistory(perv => perv.slice(0, -1));
            setCurrectProject(previousProject);
        }
    };

    useEffect(() => {
        if(!currectProject){
            const initialProject =
                projects[Math.floor(Math.random() * projects.length)];
                setCurrectProject(initialProject);
        }
    }, []);

    if(!currectProject) return null;

    return(
        <div className="project-section">
            <div className="project-header">
                <h2 className="projects-title">My projects</h2>
            </div>
            <div className="project-navigation-container">
                <button className="nav-button nav-left"
                onClick={getToPreviousProject}
                disabled={projectHistory.length === 0}
                >
                    <ChevronLeft size={32}/>
                </button>
                    <div className="project-card" key={currectProject.id}>
                        <div className="project-image">
                            <img src={currectProject.image} alt={currectProject.name} />
                        </div>
                        <div className="project-details">
                            <h3>{currectProject.name}</h3>
                            <p>{currectProject.description}</p>
                            <div className="project-technologies">
                                {currectProject.technologies.map((tech, index) => (
                                    <span key={index} className="tech-badge">{tech}</span>
                                ))}
                            </div>
                            <div className="project-links">
                            <a href={currectProject.link} target="_blank" rel="noreferrer" className="btn btn-github">
                                View on GitHub
                            </a>
                            </div>
                        </div>
                    </div>
                    <button className="nav-button nav-right" onClick={getRandomeProject}>
                            <ChevronRight size={32} />
                    </button>
            </div>
        </div>
    )

}
export default ProjectsSection;