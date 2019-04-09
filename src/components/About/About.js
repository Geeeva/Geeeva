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
                            <p>Hi, my name is <span className="bolded">Ivana</span>, and I'm <span className="bolded">Frontend developer</span> focused on projects in 
                                <span className="bolded"> React</span> and other newer libraries of <span className="bolded">JavaScript</span>.
                                Always interested in learning new things and implement them in domain of frontend development.
                                Passionate for clean, simple and understandable code that is sustainable, with an eye for design and love for visual harmony.
                                Next goals to master <span className="bolded">React Native, Angular and NodeJS.</span></p>
                        </div>
                    </div>
                </div> 
            </div>
        )
    }
}
export default About;