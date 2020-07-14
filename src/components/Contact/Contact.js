import React, {Component} from 'react';
import axios from '../.././axios-geeeva-form';
import Ivana from '../../assets/images/Ivana.jpg';

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
    		errors.nameError = 'Requires to be at least 5 characters';
    	} else {
    		errors.nameError = '';
    	}

    	if(this.state.email.indexOf("@") === -1) {
    		isError = true;
    		errors.emailError = 'Requires a valid email address';
    	} else {
    		errors.emailError = '';
    	}

    	if(this.state.message.length === 0 || this.state.message.length > 1000) {
    		isError = true;
    		errors.messageError = 'Requires a message no longer than 1000 characters';
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
                                You can contact me by email address <a href="mailto:ivana.gilich@gmail.com">ivana.gilich@gmail.com</a> or by contact form below</h3>
                                <h3>CONTACT FORM</h3>
                                <form>
                                    <div>
                                        <input 
                                            type="text"
                                            name="name" 
                                            placeholder="Name" 
                                            value={this.state.name}
                                            style={{backgroundColor: this.state.nameError === "Requires to be at least 5 characters" ? '#F1F1F1' : ''}}
                                            onChange={event => this.changeHandler(event)}
                                        />
                                        {/* Notification nameError */}
                                        <div className="nameError">
                                            <span 
                                                className={"tooltiptext" + (this.state.nameError === "Requires to be at least 5 characters" ?
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
                                            style={{backgroundColor: this.state.emailError === "Requires a valid email address" ? '#F1F1F1' : ''}}
                                            onChange={event => this.changeHandler(event)}
                                        />
                                        {/* Notification emailError */}
                                        <div className="emailError">
                                            <span 
                                                className={"tooltiptext" + (this.state.emailError === "Requires a valid email address" ?
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
                                            style={{backgroundColor: this.state.messageError === "Requires a message no longer than 1000 characters" ? '#F1F1F1' : ''}}
                                            onChange={event => this.changeHandler(event)}
                                        >
                                        </textarea>
                                        {/* Notification messageError */}
                                        <div className="messageError">
                                            <span 
                                                className={"tooltiptext" + (this.state.messageError === "Requires a message no longer than 1000 characters" ?
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