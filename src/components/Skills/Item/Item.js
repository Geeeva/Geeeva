import React, {Component} from 'react';
import Modal from './Modal/Modal';

class Item extends Component {
    state = {
        item: this.props.item,
        showModal: false
    }
    
    toggleModal = () => {
        this.setState({
            showModal: !this.state.showModal
        });
    }

    render(){
        return(
            <React.Fragment>
                <div className="item-wrapper wow fadeIn" 
                    data-wow-duration="2s" 
                    onClick={this.toggleModal}>
                    <div className="content-wrapper">
                        <div className="img-wrapper">
                            <img src={this.props.item[0]} alt={this.props.item[0]} />
                        </div>
                        <h3>{this.props.item[1]}</h3>
                    </div>
                    <Modal
                        show={this.state.showModal}
                        closeCallback={this.toggleModal}
                        data={this.state.item}
                    ></Modal>
                </div>
            </React.Fragment>
        )
    }
}
export default Item;