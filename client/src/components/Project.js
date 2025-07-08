import React from 'react';
import Technology from "./Technology";

const renderTechnologies = (project) => {
    return (
        <div>
            <h4 className="technologies-header">Technologies</h4>
            <div className="technologies">
                {
                    project.technologies.map(
                        (tech, index) => <Technology key={index} name={tech}/>
                    )
                }
            </div>
        </div>
    )
}

const renderDeployLinks = (project) => {
    return (
        project.deployLinks ?
                <div className="project-links">
                    {
                        project.deployLinks.map(
                            (link, idx) =>
                                    <a href={link} key = {link} className="link" target="_blank" rel="noopener noreferrer">
                                        Life version {idx + 1}
                                    </a>
                        )
                    }
                </div>
            :
            <> </>
    )
}

const renderGithubLinks = (project) => {
    return (
        project.github ?
            <div className="project-links">
                {
                    project.github.map(
                        (link, idx) =>
                            <>
                                <a href={link} key = {link} className="link" target="_blank" rel="noopener noreferrer">
                                    Github {idx + 1}
                                </a>
                            </>
                    )
                }
            </div>
            :
            <> </>
    )
}

const Project = ({project}) => {
    return (
        <section className="project">
            <h3 className="project-name"> {project.name} </h3>
            <p className="description">{project.description}</p>
            {
                project.image ?
                    <img
                        src={project.image}
                        alt={project.name}
                    /> :
                    <></>
            }
            <div className="project-info">
                {renderTechnologies(project)}
                {renderDeployLinks(project)}
                {renderGithubLinks(project)}
            </div>
            <div className="divider"/>
        </section>
    );
};

export default Project;