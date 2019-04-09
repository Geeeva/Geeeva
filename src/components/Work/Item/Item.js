import React, { Component } from 'react';
import Github from '../../../assets/images/github.svg';

class Item extends Component {
    newWindowOpenHandler = () => {
        window.open(this.props.item[3]);
    }

    render () {
        return (
            <div className="wow fadeIn" data-wow-duration="2s">
                <div className="item-wrapper">
                    <div className="content-wrapper">
                        <h3>{this.props.item[0]}</h3>
                        <p>{this.props.item[2]}</p>
                        <button onClick={this.newWindowOpenHandler}>Code<span className="github"><img src={Github} alt=""/></span></button>
                        <div className="img-wrapper-alternative">
                            <a href={this.props.item[3]} target="blank"><img src={this.props.item[1]} alt={this.props.item[1]} /></a>
                        </div>
                    </div>
                    <div className="img-wrapper">
                        <a href={this.props.item[3]} target="blank"><img src={this.props.item[1]} alt={this.props.item[1]} /></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Item;