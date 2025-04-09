import React from 'react';
import {FaGithub} from "react-icons/fa6";
import {MdOutlineEmail} from "react-icons/md";
import {FaLinkedin} from "react-icons/fa";

const Header = () => {
    return (
        <section className="header">
            <div className="external-links">
                <a href="https://github.com/YevheniiKyr" target="_blank" rel="noopener noreferrer">
                    <FaGithub className={"header-icon"}/>
                </a>
                <a href="mailto:ye.kyrychenko@gmail.com" target="_blank" rel="noopener noreferrer">
                    <MdOutlineEmail className={"header-icon"}/>
                </a>
                <a href="https://www.linkedin.com/in/yevhenii-kyrychenko-a402011b8/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className={"header-icon"}/>
                </a>
            </div>
            <div className="internal-links">
                <a href="#my-projects">My projects</a>
                <a href="#contact-form">Contact me</a>
            </div>
        </section>

    );
};

export default Header;