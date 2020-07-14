import React from 'react';
import Item from './Item/Item';
import Html5 from '../../assets/images/html5.svg';
import Css3 from '../../assets/images/css3.svg';
import Sass from '../../assets/images/sass.svg';
import Responsive from '../../assets/images/responsive.svg';
import Bootstrap from '../../assets/images/bootstrap.svg';
import Javascript from '../../assets/images/javascript.svg';
import Jquery from '../../assets/images/jquery.svg';
import Npm from '../../assets/images/npm.svg';
import Git from '../../assets/images/git.svg';
import Reactpic from '../../assets/images/react.svg';

const skills = () => {
    const items = [
        [Html5, "HTML5", "Creating HTML structure of the web page, inserting links, videos and pictures, working with semantic elements, converting designs from Zeplin to HTML pages" ],
        [Css3, "CSS3", "Changing style, color and position of HTML elements, working with animations, working with flexbox and css grid"],
        [Sass, "SCSS", "Using variables and mixins, using nesting to target specific elements, structuring project in separate modules"],
        [Responsive, "Responsive Web Design", "Adapting aplications for different screens using media queries, responsive images, mobile first and desktop first approach"],
        [Bootstrap, "Bootstrap Responsive Web Design", "Using bootstrap grid system, using bootstrap components and classes"],
        [Javascript, "JavaScript", "Data types, variables, functions, loops, If/Else statements, arrays and array methods, algorithms, manipulating with DOM, objects, inheritance, ES6 features, asynchronous programming, FETCH, Async/Await"],
        [Jquery, "jQuery", "Manipulating with DOM, manipulating with CSS, working with events"],
        [Npm, "NPM", "Working in node enviroment, using NPM packages and scripts"],
        [Git, "GIT", "Good knowledge of GIT ecosystem, using command line and GIT commands, working with other developers on same project"],
        [Reactpic, "React", "Single - page aplications (SPA), React 16.13.1, helpful tools for creating SPA applications, Redux, ContextAPI/Reducers"]
    ]
    
    const item = items.map((item, index) => {
        return (
            <Item 
                key={index}
                item={item}
            />
        )
    })

    return (
        <div className="container-fluid">
            <div className="container"> 
                <div className="skills-wrapper">
                    <h2 className="wow fadeInRight" data-wow-duration="1s">Skills</h2>
                    <div className="technics-wrapper">
                        {item}
                    </div>
                </div>
            </div> 
        </div>
    );
}

export default skills;