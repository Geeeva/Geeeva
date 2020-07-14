import React from 'react';

const footer = () => {
    return (
        <div className="container-fluid footer-wrapper">
            <div className="container"> 
                <p>© Copyright 2020 Ivana Gilic | All Rights Reserved.</p>
                <div className="icon-wrapper">
                    <a href="https://github.com/Geeeva" target="_blank" rel="noopener noreferrer">
                        <div className="github-wrapper">
                            <div className="circle">
                            </div>
                            <svg id="github" viewBox="0 0 24 24">
                            <path fill="#ffffff" d="M15,22.8v-3.3c0-1.1-0.4-1.9-0.8-2.2c2.7-0.3,5.5-1.3,5.5-5.9c0-1.3-0.5-2.4-1.2-3.2
                                C18.5,7.9,19,6.6,18.3,5c0,0-1-0.3-3.3,1.2c-1-0.3-2-0.4-3-0.4c-1,0-2,0.1-3,0.4C6.7,4.7,5.7,5,5.7,5C5,6.6,5.5,7.8,5.6,8.2
                                C4.8,9,4.3,10.1,4.3,11.4c0,4.6,2.8,5.6,5.5,5.9c-0.3,0.3-0.7,0.8-0.8,1.6c-0.7,0.3-2.4,0.8-3.5-1c0,0-0.6-1.2-1.8-1.2
                                c0,0-1.2,0-0.1,0.7c0,0,0.8,0.4,1.3,1.8c0,0,0.7,2.1,4,1.4v2.2c0,0.3-0.2,0.6-0.7,0.6C9.5,23.8,10.7,24,12,24
                                c1.3,0,2.5-0.2,3.7-0.6C15.2,23.4,15,23.1,15,22.8z"/>
                            </svg>
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/ivana-gili%C4%87-04620850/" target="_blank" rel="noopener noreferrer">
                        <div className="linkedin-wrapper">
                            <div className="rectangle">
                            </div>
                            <svg id="linkedin" viewBox="0 0 24 24">
                                <path fill="#ffffff" d="M8,19H5V8h3V19z M6.5,6.7c-1,0-1.8-0.8-1.8-1.8s0.8-1.8,1.8-1.8S8.3,4,8.3,5S7.5,6.7,6.5,6.7z M20,19h-3
                                v-5.6c0-3.4-4-3.1-4,0V19h-3V8h3v1.8c1.4-2.6,7-2.8,7,2.5V19z"/>
                            </svg>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default footer;