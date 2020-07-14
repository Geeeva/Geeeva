import React, {Component} from 'react';
import Item from './Item/Item';
import Timeline from '../../assets/images/timeline.png';
import Dining from '../../assets/images/dining-room.png';
import ToDo from '../../assets/images/todo.png';
import Drum from '../../assets/images/drum.png';
import Tree from '../../assets/images/tree.png';
import Cryptocurrency from '../../assets/images/cryptocurrency.png';
import Weather from '../../assets/images/weather.png';
import Film from '../../assets/images/film.png';
import Cart from '../../assets/images/cart.png';
import Recognition from '../../assets/images/recognition.png';
import Slider from "react-slick";

class Work extends Component {
    render () {
        const items = [
            ["React Dining Room", Dining, "React project that demonstrates restaurants overview, by showing combined restaurant data extracted from 2 json files", "https://github.com/Geeeva/Dining-room/"],
            ["React Film Filtering", Film, "Project demonstrates simple application with film wish list, whereas the data between session is stored in localStorage", "https://github.com/Geeeva/Film-filtering"],
            ["React Shopping-cart", Cart, "Project with shopping process in 3 steps, entering items, selecting items and increasing/decreasing the quantity of selected items", "https://github.com/Geeeva/Shopping-cart"],
            ["React Drum", Drum, "React project demonstrates sound emition od keypress both using the virtual keyboard and real with letters", "https://github.com/Geeeva/Drum"],
            ["React Folder Tree", Tree, "React folder tree project that shows the content of the folders with documents as well as documents details", "https://github.com/Geeeva/Folder-Tree"],
            ["React To Do List", ToDo, "Project in first section shows already prepared To-do-List, in second will be created new To-do-List", "https://github.com/Geeeva/To-do-list"],
            ["React Cryptocurrency ranking", Cryptocurrency, "This project demonstrates connecting to crypto currency api Coinlore, by using Axios", "https://github.com/Geeeva/Cryptocurrency-ranking-overview"],
            ["React Weather Foreceact", Weather, "Project shows a simple Weather forecast application for the current day. It demonstrates connecting to MetaWeather api, by using fetch method for getting data from server", "https://github.com/Geeeva/Weather-forecast"],
            ["React Color Recognition", Recognition, "Project demonstrates the process of connecting to Clarifai API for Color recognitions", "https://geeeva.github.io/Color-recognition"]
            /*["HTML\\CSS\\ES5 Project", Timeline, "Timeline project done in HTML5, CSS3 & ES5, displaying timeline with appearing items on scroll", "https://github.com/Geeeva/Animated-timeline"],*/
        ]
    
        const item = items.map((item, index) => {
            return (
                <Item 
                    key={index}
                    item={item}
                />
            )
        })

        const settings = {
            dots: true,
            infinite: true,
            arrows: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: false,
            nextArrow: false,
            initialSlide: 0,
        };

        return (
            <div className="container-fluid">
                <div className="container">   
                    <div className="work-wrapper">
                        <h2 className="wow fadeInLeft" data-wow-duration="1s">Works</h2>
                        <div className="items-wrapper">
                            <h3 className="intro">CHECK OUT SOME OF MY PROJECTS</h3>
                            <Slider {...settings}>
                                {item}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Work;