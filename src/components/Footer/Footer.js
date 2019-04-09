import React from 'react';
import GithubIcon from '../../assets/images/github-icon.svg';
import LinkedinIcon from '../../assets/images/linkedin-icon.svg';

const footer = () => {
    return (
        <div className="container-fluid footer-wrapper">
            <div className="container"> 
                <p>© Copyright 2019 Ivana Gilic | All Right Reserved.</p> 
                <div className="icon-wrapper">
                    <div className="github">
                        <a href="https://github.com/Geeeva"><img src={GithubIcon} alt="Github" /></a>
                    </div>
                    <div className="linkedin">
                        <a href="https://www.linkedin.com/in/ivana-gili%C4%87-04620850/"><img src={LinkedinIcon} alt="Linkedin" /></a>   
                    </div>
                </div>
            </div>
        </div>
    );
}

export default footer;