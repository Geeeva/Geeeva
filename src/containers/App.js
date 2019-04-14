import React, { Component } from 'react';
import Header from '../components/Header/Header';
import About from '../components/About/About';
import Work from '../components/Work/Work';
import Skills from '../components/Skills/Skills';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import ScrollableAnchor from 'react-scrollable-anchor';
import WOW from 'wowjs';
import {Helmet} from "react-helmet";
import '../assets/sass/main.scss';

class App extends Component {
    componentDidMount() {
        new WOW.WOW().init();
    }
    
    render() {
        return (
            <div> 
                <Helmet>
                    <title>Ivana Gilic | Portfolio</title>
                    <meta name="keywords" 
                          content="HTML, CSS, SCSS, SVG, Responsive web design, Bootstrap, JavaScript, jQuery, NPM, GIT, React
                    " />
                    <meta
                        name="description"
                        content="Frontend engineer working on useful scripts, as well as experimenting with new JS libraries "
                    />
                </Helmet>
                <header>
                    <Header />
                </header>
                <main>
                    <ScrollableAnchor id={'about'}>
                        <div><About /></div>
                    </ScrollableAnchor>
                    <ScrollableAnchor id={'skills'}>
                        <div><Skills /></div>
                    </ScrollableAnchor>
                    <ScrollableAnchor id={'work'}>
                        <div><Work /></div>
                    </ScrollableAnchor>
                    <ScrollableAnchor id={'contact'}>
                        <div><Contact /></div>
                    </ScrollableAnchor>
                    </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        );
    }
}

export default App;

