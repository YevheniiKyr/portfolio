import React from 'react';
import avatar from "../images/me_and_green.jpg"
const Landing = () => {

    const intro = "Hello, I am Yevhenii";
    const specialization = " Full-stack developer "

    return (
        <div className="landing">
                <img src= {avatar} className="avatar" title = "Yevhenii" alt={"Yevhenii"}></img>
                <h1 className="intro">{intro}</h1>
                <h2 className="specialization">{specialization}</h2>
        </div>
    );
};

export default Landing;