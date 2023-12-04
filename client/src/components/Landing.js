import React from 'react';
import avatar from "../images/gosling.jpg"
const Landing = () => {

    const intro = "Hello, I am Zhenya";
    const specialization = " Full-stack developer "

    return (
        <div className="landing">
                <img src={avatar} className="avatar"></img>
                <h1 className="intro">{intro}</h1>
                <h2 className="specialization">{specialization}</h2>
        </div>
    );
};

export default Landing;