import React from 'react';

const renderTechnologies = (project) => {
    return (
        <>
            <p className="technologies_header"> Technologies : </p>
            <p className="technologies">
                {
                    project.technologies.slice(0,-1).map(
                        (tech, index) => <span key={index}>{tech}, </span>
                    )
                }
                <span>{project.technologies[project.technologies.length-1]}</span>
            </p>
        </>
    )
}

const renderDeployLinks = (project) => {
    return (
        project.deployLinks ?
            <>
                <p className="project_links">
                    {
                        project.deployLinks.map(
                            (link, idx) =>
                                <>
                                    <a href={link} key = {link} className="link" target="_blank" rel="noopener noreferrer">
                                        Life version {idx + 1}
                                    </a>
                                </>
                        )
                    }
                </p>
            </>
            :
            <> </>
    )
}

const renderGithubLinks = (project) => {
    return (
        <>
            <p className="project_links">
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
            </p>
        </>
    )
}
const Project = ({project}) => {
    return (
        <div className="project">
            <p> {project.name} </p>
            <img
                src={project.image}
                alt={project.name}
            />
            <div className="project_info">
                <p className="description">{project.description}</p>
                {renderTechnologies(project)}
                {renderDeployLinks(project)}
                {renderGithubLinks(project)}
            </div>
        </div>
    );
};

export default Project;