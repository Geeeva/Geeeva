import React, { Component } from 'react';
import Header from '../components/Header/Header';
import About from '../components/About/About';
import Work from '../components/Work/Work';
import Skills from '../components/Skills/Skills';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import ScrollableAnchor from 'react-scrollable-anchor';
import WOW from 'wowjs';
import '../assets/sass/main.scss';

class App extends Component {
    componentDidMount() {
        new WOW.WOW().init();
    }
    
    render() {
        return (
            <React.Fragment> 
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
            </React.Fragment>
        );
    }
}

export default App;

