import React, {Component} from 'react';
import axios from '../.././axios-geeeva-form';
import Ivana from '../../assets/images/IvanaInsta.jpg';

class Contact extends Component {
    state = {
        paragraphs: [],
        name: '',
        nameError: '',
        email: '',
        emailError: '',
        subject: '',
        message: '',
        messageError: '',
        messageSent: false,
    };

    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    validate = () => {
    	let isError = false;
    	const errors = [];

    	if(this.state.name.length < 5) {
    		isError = true;
    		errors.nameError = 'Name needs to be at least 5 characters long';
    	} else {
    		errors.nameError = '';
    	}

    	if(this.state.email.indexOf("@") === -1) {
    		isError = true;
    		errors.emailError = 'Requires valid email';
    	} else {
    		errors.emailError = '';
    	}

    	if(this.state.message.length === 0 || this.state.message.length > 1000) {
    		isError = true;
    		errors.messageError = 'Pls.enter a message no longer then 1000 charachters';
    	} else {
    		errors.messageError = '';
    	}

    	if(isError){
    		this.setState({
    			...errors
    		})
    	}
    	return isError;
    }

    //For submit button

    submitHandler = (event) => {
        event.preventDefault();
		const err = this.validate();

		const contact = { 
	        name: this.state.name, 
	        email: this.state.email, 
	        subject: this.state.subject, 
	        message: this.state.message, 
	    }															

		if(err === false) {
	    	this.setState({
	    		name: '',
	          	nameError: '',
	            email: '',
	            emailError: '',
	            subject: '',
	            message: '',
	            messageError: ''
	    	})

            axios.post('/contact.json', contact)
                .then(response => {
                    console.log(response.status);
                    if(response.status === 200){
                    this.setState({messageSent: "Thank you, your message has been successfully sent!"});
                }})
                .catch(error => console.log(error));
            } 
            this.setState({messageSent: ""})
        }

    recaptchaLoadedHandler = () => {
    	console.log('Recaptcha successfully loaded');
    }

    verifyCallbackHandler = (response) => {
    	if(response) {
    		this.setState({
    			isVerified: true
    		})
    	}
    }
    
    render() {
        return (
            <div className="container-fluid">
                <div className="container"> 
                    <div className="contact-wrapper">
                        <h2 className="wow fadeInDown" data-wow-duration="1.5s">Contact</h2>
                        <div className="contact-form-content">
                            <div className="form-wrapper wow pulse" data-wow-duration=".7s">
                                <h3 className="intro">
                                You can contact me by email address ivana.gilich@gmail.com or by contact form below</h3>
                                <h3>CONTACT FORM</h3>
                                <form>
                                    <div>
                                        <input 
                                            type="text" 
                                            name="name" 
                                            placeholder="Name" 
                                            value={this.state.name}
                                            onChange={event => this.changeHandler(event)}
                                        />
                                        {/* Notification nameError */}
                                        <div className="nameError">
                                            <span 
                                                className={"tooltiptext" + (this.state.nameError === "Name needs to be at least 5 long" ?
                                                    ' visible' : '')}>{this.state.nameError}
                                            </span>
                                        </div>
                                    </div>
                                
                                    <div>
                                        <input 
                                            type="email" 
                                            name="email" 
                                            placeholder="Email Address"
                                            value={this.state.email}
                                            onChange={event => this.changeHandler(event)}
                                        />
                                        {/* Notification emailError */}
                                        <div className="emailError">
                                            <span 
                                                className={"tooltiptext" + (this.state.emailError === "Valid email is required" ?
                                                    ' visible' : '')}>{this.state.emailError}</span>
                                        </div>
                                    </div>
            
                                    <input 
                                        type="text" 
                                        name="subject" 
                                        placeholder="Subject"
                                        value={this.state.subject}
                                        className="subject"
                                        onChange={event => this.changeHandler(event)}
                                        />
            
                                    <div>
                                        <textarea 
                                            name="message" 
                                            cols="30" 
                                            rows="7"
                                            value={this.state.message}
                                            onChange={event => this.changeHandler(event)}
                                        >
                                        </textarea>
                                        {/* Notification messageError */}
                                        <div className="messageError">
                                            <span 
                                                className={"tooltiptext" + (this.state.messageError === "Pls.enter a message no longer then 1000 charachters" ?
                                                    ' visible' : '')}>{this.state.messageError}</span>
                                        </div>
                                    </div>
                                    <button onClick={event => this.submitHandler(event)}>Send Message</button>
                                    <div className="message-sent">{this.state.messageSent}</div>
                                </form>
                            </div>
                            <div className="pic-wrapper">
                                <img src={Ivana} alt="Ivana Gilic" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;