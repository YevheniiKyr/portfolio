import React from 'react';
import Project from "./Project";
import {projects} from "../projects";

const Projects = () => {


    return (
        <div className="project-section" id="my-projects">
            <h1 className="projects-header"> Here is some of my projects </h1>
            <div className="projects-container">
                {
                    projects.map((project) =>
                        <Project key={project.name} project={project}/>
                    )
                }
            </div>
        </div>

    )
};

export default Projects;
