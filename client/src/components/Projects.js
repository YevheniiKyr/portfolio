import React from 'react';
import Project from "./Project";

const Projects = () => {

    const projects = [
        {
            name: "Movie explorer",
            description: "Users can search movies to see information about them.",
            technologies: ["React js", "Redux Toolkit", "Redux saga", "mui"],
            deployLinks: ["https://luminous-halva-9e59b7.netlify.app/", "https://6544b498247b8873301722f4--relaxed-mermaid-c3d7c5.netlify.app/"],
            github: ["https://github.com/YevheniiKyr/movie_explorer"],
            image: "https://private-user-images.githubusercontent.com/84139553/280225952-cae30cb4-9948-4b48-82ad-592eb40a421c.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDE2MzIyNjcsIm5iZiI6MTcwMTYzMTk2NywicGF0aCI6Ii84NDEzOTU1My8yODAyMjU5NTItY2FlMzBjYjQtOTk0OC00YjQ4LTgyYWQtNTkyZWI0MGE0MjFjLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEyMDMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMjAzVDE5MzI0N1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTUxOTMzYmUyNzI4Y2M4M2NhNmM4OWIzMTA2NGYxYmU0ZmRkNTFlZTk4ODk1NDdlOGNiNzdlNmFlNTgwOTI3MDAmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.4KmHbm7tvsKAt7x-zi7VzGIaxniJeT5FIOgDnmbHIkU"         },
        {
            name: "Anime shop",
            description: "Online shop with anime merch. On the website clients can buy products that they like.",
            technologies: ["React js", "MobX", "Node JS", "Express JS", "MongoDB"],
            github: ["https://github.com/YevheniiKyr/anime_shop"],
            image: "https://private-user-images.githubusercontent.com/84139553/287512286-ded4a369-cd38-45fd-9a86-9e9db4e3bf30.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDE2MzEwNDIsIm5iZiI6MTcwMTYzMDc0MiwicGF0aCI6Ii84NDEzOTU1My8yODc1MTIyODYtZGVkNGEzNjktY2QzOC00NWZkLTlhODYtOWU5ZGI0ZTNiZjMwLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEyMDMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMjAzVDE5MTIyMlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWMwNzE2ZGQ3NzU3ZjA1ZjIzODU4YTcxZmFkNTcxZDJjNzIzMjUzMWM4NjE3OTBmN2E1ZDc0YjE2MDg2NTJmOTkmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.VVbAGMQVpfG6aRfHBtQa-JJBUKAZFVgw_bsiHD_CQVA"

        }, {
            name: "Chat",
            description: "Simple chat on sockets. Users can communicate in real-time.",
            technologies: ["React JS", "Node JS", "MobX"],
            github: ["https://github.com/YevheniiKyr/simpleWebSocketChat"],
            image: "https://private-user-images.githubusercontent.com/84139553/279660220-257a7604-e69a-4408-ac51-1e98df2c7e3c.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDE2MzIzMzYsIm5iZiI6MTcwMTYzMjAzNiwicGF0aCI6Ii84NDEzOTU1My8yNzk2NjAyMjAtMjU3YTc2MDQtZTY5YS00NDA4LWFjNTEtMWU5OGRmMmM3ZTNjLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEyMDMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMjAzVDE5MzM1NlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWE5ZTJjMTI3ZDM4NDNiMGE0YzUyOTgwYjEwMjYxMTU3MTk0NTcyMWQyNzEyZDYzMjFlNThhMWVkYTRjYmNhYzgmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.-529pj6LquziyfZ3CyihxiOP4EvU5mSfw-Yki6s4c94"
        }, {
            name: "Superheroes app",
            description: "Users can create/delete/edit superheroes",
            technologies: ["Express JS", "React JS", "Supertest", "Joi"],
            github: ["https://github.com/YevheniiKyr/jsn_test"],
            image: "https://private-user-images.githubusercontent.com/84139553/278008757-44aa9601-66ee-4f93-a927-d51a89d30326.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDE2MzIzNzgsIm5iZiI6MTcwMTYzMjA3OCwicGF0aCI6Ii84NDEzOTU1My8yNzgwMDg3NTctNDRhYTk2MDEtNjZlZS00ZjkzLWE5MjctZDUxYTg5ZDMwMzI2LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEyMDMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMjAzVDE5MzQzOFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWUwMmM1NTA4YTMyZmQ1ZjU5NmVhZTUwYmI2MzgxMjA2ZWMxZTFhODgwN2I2ZmVlNTA3MGQzODQ0OWM2ZTM0NzMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.v1blWDA-zYO6Mq0hXfccjMBPHhGXhlFto84fu5PYjkg"
        }, {
            name: "Capybara network",
            description: "Social network for capybara fans. Create your own capybara and communicate with others!",
            technologies: ["React js", "MobX", "Ruby on rails"],
            github: [
                "https://github.com/YevheniiKyr/capibara_life",
                "https://github.com/YevheniiKyr/Capi_slay_front"
            ],
            image: "https://private-user-images.githubusercontent.com/84139553/278008757-44aa9601-66ee-4f93-a927-d51a89d30326.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDE2MzIzNzgsIm5iZiI6MTcwMTYzMjA3OCwicGF0aCI6Ii84NDEzOTU1My8yNzgwMDg3NTctNDRhYTk2MDEtNjZlZS00ZjkzLWE5MjctZDUxYTg5ZDMwMzI2LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEyMDMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMjAzVDE5MzQzOFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWUwMmM1NTA4YTMyZmQ1ZjU5NmVhZTUwYmI2MzgxMjA2ZWMxZTFhODgwN2I2ZmVlNTA3MGQzODQ0OWM2ZTM0NzMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.v1blWDA-zYO6Mq0hXfccjMBPHhGXhlFto84fu5PYjkg"
        },
    ]

    const image = "https://github.com/YevheniiKyr/movie_explorer/assets/84139553/cae30cb4-9948-4b48-82ad-592eb40a421c"

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