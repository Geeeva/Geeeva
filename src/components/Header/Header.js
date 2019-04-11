import React, {Component} from 'react';

class Header extends Component {

    componentDidMount() {
        let prevScrollpos = window.pageYOffset;
        window.onscroll = () => {
            let currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                document.getElementById("menu-wrapper").style.top = "0";
            } else {
                document.getElementById("menu-wrapper").style.top = "-150px";
            }
            prevScrollpos = currentScrollPos;

            if (currentScrollPos > 500) {
                document.getElementById("menu-wrapper").style.top = "0";
                document.getElementById("menu-wrapper").style.backgroundColor = "#695753";
    
            } else if( currentScrollPos === 0) {
                document.getElementById("menu-wrapper").style.backgroundColor = "rgba(105, 87, 83, 0.75)";
            }
        }
    }
    render () {
        return (
            <div className="container-fluid" id="menu-wrapper">
                <div className="container"> 
                    <div className="name">Ivana Gilic</div>
                    <nav className="menu">
                        <a href='#about'> About </a>
                        <a href='#skills'> Skills </a>
                        <a href='#work'> Work </a>
                        <a href='#contact'> Contact </a>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Header;