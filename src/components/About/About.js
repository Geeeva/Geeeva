import React, {Component} from 'react';
import WOW from 'wowjs';

class About extends Component {
    componentDidMount() {
        new WOW.WOW().init();
    }
    
    render() {
        return (
            <div className="container-fluid">
                <div className="container"> 
                    <div className="about-wrapper">
                        <h2 className="wow fadeInLeft" data-wow-duration="1.5s">About me</h2>
                        <div className="text-wrapper wow fadeInDown" data-wow-duration="2s">
                            <h3>LET ME INTRODUCE MYSELF</h3>
                            <div>Hi, my name is <span className="bolded">Ivana</span>, and I'm <h1>Frontend developer</h1> focused on projects in 
                                <span className="bolded"> React</span> and other newer libraries of <span className="bolded">JavaScript</span>.
                                Always increasing the knowledge and implement it in domain of frontend development.
                                Passionate for clean, simple and understandable code that is sustainable, with an eye for design and love for visual harmony.
                                Following trends in Frontend. Next goals to master <span className="bolded">React Native, AngularJS and NodeJS.</span></div>
                        </div>
                    </div>
                </div> 
            </div>
        )
    }
}
export default About;