import React from 'react';
import Project from "./Project";
import movie_explorer from "../images/movie_explorer_small.png"
import anime_shop from "../images/anime_shop.png"
import chat_main from "../images/chat_main.png"
import superheroes from "../images/superhero_platform.png"
import capybaras from "../images/capi_main_page.png"

const Projects = () => {

    const projects = [
        {
            name: "Anime shop",
            description: `This project is an online shop for anime merchandise where users can browse, search, and purchase products. 
            It includes a product catalog with filters, detailed product pages, a shopping cart, and a checkout process. 
            Logged-in users can leave comments, manage their profiles, and view order history. 
            Admins have access to a panel for managing products and orders. 
            The platform aims to deliver a smooth shopping experience for anime fans.`,
            technologies: ["React js", "MobX", "Node JS", "Express JS", "MongoDB"],
            github: ["https://github.com/YevheniiKyr/anime_shop"],
            image: anime_shop
        },
        {
            name: "Movie explorer",
            description: `Users have the ability to search for movies using keywords or titles to quickly find the 
            content they are interested in. Once a movie is selected, the application provides detailed information 
            about it, including the title, release date, genre, rating, synopsis, and more. This feature helps users 
            explore movies they are curious about, discover new ones, and make informed decisions about what to 
            watch next.`,
            technologies: ["React js", "Redux Toolkit", "Redux saga", "mui"],
            deployLinks: ["https://movie-explorer-zhenya.netlify.app//"],
            github: ["https://github.com/YevheniiKyr/movie_explorer"],
            image: movie_explorer
        },
        {
            name: "Superheroes app",
            description: `Users can view a list of superheroes, each containing key details and images. 
            They have the ability to create new superheroes by providing names, descriptions, and uploading images.
             Additionally, users can edit existing superhero profiles to update their information or appearance, 
             as well as delete those that are no longer needed. This functionality allows for full management of 
             superhero data in an interactive and user-friendly way.`,
            technologies: ["Express JS", "React JS", "Supertest", "Joi"],
            deployLinks: ["https://superheroes-platform.netlify.app/"],
            github: ["https://github.com/YevheniiKyr/jsn_test"],
            image: superheroes
        }, {
            name: "Capybara network",
            description: `Users can join a fun and interactive social network dedicated to capybara fans. 
            They can create their own custom capybara by providing a name, description, and uploading an image. 
            Once their capybara is created, users can browse and connect with other users by adding them as friends. 
            Additionally, capybaras can form special relationships by getting married, adding a playful and unique twist to the platform. 
            This application encourages creativity, social interaction, and community building around a shared love for capybaras.`,
            technologies: ["React js", "MobX", "Ruby on rails"],
            github: [
                "https://github.com/YevheniiKyr/capibara_life",
                "https://github.com/YevheniiKyr/Capi_slay_front"
            ],
            image: capybaras
        },
        {
            name: "Chat",
            description: `Users can communicate in real-time using a simple and responsive chat application built on sockets. 
            They have the ability to create chat rooms, optionally securing them with a password to control access. 
            Once inside a room, users can exchange messages instantly with others, making the experience smooth and interactive. 
            This project demonstrates real-time communication features and supports multiple chat rooms for group conversations. 
            It’s a straightforward yet functional implementation of socket-based messaging.`,
            technologies: ["React JS", "Node JS", "MobX"],
            github: ["https://github.com/YevheniiKyr/simpleWebSocketChat"],
            deployLinks: ["https://simple-web-socket-chat.netlify.app/"],
            image: chat_main
        },
    ]


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
