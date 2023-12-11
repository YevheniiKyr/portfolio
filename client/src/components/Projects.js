import React from 'react';
import Project from "./Project";
import movie_explorer from "../images/movie_explorer_small.png"
import anime_shop from "../images/anime_shop_v2.png"
import chat_main from "../images/chat_main.png"
import superheroes from "../images/superheroes_hero_page.png"
import capybaras from "../images/capi_main_page.png"
const Projects = () => {

    const projects = [
        {
            name: "Movie explorer",
            description: "Users can search movies to see information about them.",
            technologies: ["React js", "Redux Toolkit", "Redux saga", "mui"],
            deployLinks: ["https://luminous-halva-9e59b7.netlify.app/", "https://6544b498247b8873301722f4--relaxed-mermaid-c3d7c5.netlify.app/"],
            github: ["https://github.com/YevheniiKyr/movie_explorer"],
            image: movie_explorer
        },
        {
            name: "Anime shop",
            description: "Online shop with anime merch. On the website clients can buy products that they like.",
            technologies: ["React js", "MobX", "Node JS", "Express JS", "MongoDB"],
            github: ["https://github.com/YevheniiKyr/anime_shop"],
            image: anime_shop
        }, {
            name: "Chat",
            description: "Simple chat on sockets. Users can communicate in real-time.",
            technologies: ["React JS", "Node JS", "MobX"],
            github: ["https://github.com/YevheniiKyr/simpleWebSocketChat"],
            image: chat_main
        }, {
            name: "Superheroes app",
            description: "Users can create/delete/edit superheroes",
            technologies: ["Express JS", "React JS", "Supertest", "Joi"],
            github: ["https://github.com/YevheniiKyr/jsn_test"],
            image: superheroes
        }, {
            name: "Capybara network",
            description: "Social network for capybara fans. Create your own capybara and communicate with others!",
            technologies: ["React js", "MobX", "Ruby on rails"],
            github: [
                "https://github.com/YevheniiKyr/capibara_life",
                "https://github.com/YevheniiKyr/Capi_slay_front"
            ],
            image: capybaras
        },
    ]


    return (
        <div className="project-section" id="my-projects">
            <h1 className="projects-header"> My projects </h1>
            <div className="projects-container">
                {
                    projects.map((project) =>
                        <Project key={project.name} project={project} />
                    )
                }
            </div>
        </div>

    )
        ;
};

export default Projects;