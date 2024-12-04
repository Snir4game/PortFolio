import React from "react";
import "./ProjectSection.css";
import GameHubPic from "../Pics/GameHub.png";

const ProjectsSection = () => {
    const projects = [
        {
            id:1,
            name: "GameHub",
            description: "A platform for gamers to search for games and add them to their library a new games and old games.",
            technologies: ["React","Firebase","JavaScript"],
            image: GameHubPic,
            link: "https://github.com/Snir4game/GameHub"

        }
    ];
    return(
        <div className="project-section">
            <div className="project-header">
                <h2 className="projects-title">My projects</h2>
            </div>
            <div className="project-container">
                {projects.map((project) => (
                    <div className="project-card" key={project.id}>
                        <div className="project-image">
                            <img src={project.image} alt={project.name} />
                        </div>
                        <div className="project-details">
                            <h3>{project.name}</h3>
                            <p>{project.description}</p>
                            <div className="project-technologies">
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className="tech-badge">{tech}</span>
                                ))}
                            </div>
                            <div className="project-links">
                            <a href={project.link} target="_blank" rel="noreferrer" className="btn btn-github">
                                View on GitHub
                            </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )

}
export default ProjectsSection;