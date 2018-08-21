import React, { Component } from 'react';
import TextButton from '../TextButton';
import PropTypes from 'prop-types';
import PopUp from './PopUp';
import './style/style.css';



function validatePassword(pass) {
	return pass.length >= 5 && (/\W/).test(pass) && (/[0-9]/).test(pass) && (/[A-Z]/).test(pass);
}

function validateName(name) {
	return name.length > 0;
}

function validateEmail(email) {
	return email.length > 0 && email.match(/@{1}/) && email.slice(0, email.indexOf('@')).length > 0 && email.slice(email.indexOf('@') + 1).length > 0;
}

function validatePhone(phone) {
	return  phone.length > 0 && phone.match(/[0-9]/g).length === 10;
}

function validateRepass(pass, repass) {
	return repass.length > 0 && pass === repass;
}

function validate(name, lastname, mail, phone, password,reppass) {
	return {
		name: validateName(name),
		lastname: validateName(lastname),
		mail: validateEmail(mail),
		phone: validatePhone(phone),
		password: validatePassword(password),
		reppass: validateRepass(password, reppass)
	};
}

class SpeakerForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: this.props.userData.name,
			lastname: this.props.userData.lastname,
			mail: this.props.userData.mail,
			phone: this.props.userData.phone,
			password: this.props.userData.password,
			reppass: this.props.userData.password,
			renderPopUp: false,
			touchedInput: {
				name: false,
				lastname: false,
				mail: false,
				phone: false,
				password: false,
				reppass: false,	
			},
		};
		this.inputRef = null;
		this.setInputRef = elem => {
			this.inputRef = elem;
		};
		this.fillFormHandler = this.fillFormHandler.bind(this);
		this.submitInfo = this.submitInfo.bind(this);
		this.togglePopUp = this.togglePopUp.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
	}
	
	componentDidMount() {
		if(this.inputRef) {
			this.inputRef.focus();
		}
	}
	
	submitInfo(evt) {	
		evt.preventDefault();
	}
	
	fillFormHandler(field) {
		return (evt) => {
			const value = evt.target.value;
			this.setState({
				[field]: value
			})
		};
	}
	
	handleBlur(field) {
		return () => {
			if (!this.state.touchedInput[field]) {
				this.setState({
					touchedInput: {...this.state.touchedInput, [field]: true}
				});
			}
		};	
	}
	
	togglePopUp() {
		this.setState( prevstate => ({
			renderPopUp: !prevstate.renderPopUp
		}));
	}
	
	shouldMarkError(field, errObj) {
		return !errObj[field] && this.state.touchedInput[field];
	}

	render() {
		const {
			name, 
			lastname,
			mail,
			phone,
			password,
			reppass,
			renderPopUp
		} = this.state;
		
		const {
			textHeader
		} = this.props;
		
		const err = validate(name, lastname, mail, phone, password, reppass);
		const enabledButton = Object.keys(err).some(elem => !err[elem]);
		
		return(
			<form className="new-speaker-form" onSubmit={this.submitInfo}>
				<h2 className="form-title">{textHeader}</h2>
				
				<label htmlFor="name"><span className="label">name:</span></label>			
				<input id="name" type="text" placeholder="Jonh" 
					value={name} 
					onChange={this.fillFormHandler("name")}
					ref={this.setInputRef} 
					onBlur={this.handleBlur("name")}
					className={this.shouldMarkError("name", err) ? "error" : ""}/>
				
				<label htmlFor="lastname"><span className="label">last name:</span></label>
				<input id="lastname" type="text" placeholder="Doe" 
					value={lastname} 
					onChange={this.fillFormHandler("lastname")}
					onBlur={this.handleBlur("lastname")}
					className={this.shouldMarkError("lastname", err) ? "error" : ""}/>
				
				<label htmlFor="mail"><span className="label">email:</span></label>
				<input id="mail" type="email" placeholder="jonh@gmail.com" 
					value={mail} 
					onChange={this.fillFormHandler("mail")}
					onBlur={this.handleBlur("mail")}
					className={this.shouldMarkError("mail", err) ? "error" : ""}/>
				
				<label htmlFor="phone"><span className="label">phone:</span></label>
				<input id="phone" type="number" placeholder="555-555-5555" 
					value={phone} 
					onChange={this.fillFormHandler("phone")}
					onBlur={this.handleBlur("phone")}
					className={this.shouldMarkError("phone", err) ? "error" : ""}/>
				
				<label htmlFor="pass"><span className="label">password:</span></label>
				<div className="popup-container">
					 <PopUp 
						 text="number, uppercase, special charactes" 
						 visibility={renderPopUp} 
						 position={{
							 bottom: 70
						 }}/> 
					<input id="pass" type="password" placeholder="Th1sIs1523@3" 
						value={password} 
						onChange={this.fillFormHandler("password")}
						onFocus={this.togglePopUp}
						onBlur={() => {
							this.handleBlur("password");
							this.togglePopUp();
						}}
						className={this.shouldMarkError("password", err) ? "error" : ""}/>
				</div>
				
				<label htmlFor="rep-pass"><span className="label">repeat password:</span></label> 
				<input id="rep-pass" type="password" placeholder="Th1sIs1523@3" 
					value={reppass} 
					onChange={this.fillFormHandler("reppass")}
					onBlur={this.handleBlur("reppass")}
					className={this.shouldMarkError("reppass", err) ? "error" : ""}/>
				
				<TextButton text="create" customClasses="submit-button" onClickHandler={this.submitInfo} disabled={enabledButton}/>
			</form>
		);
	}
}

SpeakerForm.propTypes = {
	userData: PropTypes.object,
	textHeader: PropTypes.string
}

SpeakerForm.defaultProps = {
	userData: {
		name: "",
		lastname: "",
		mail: "",
		phone: "",
		password: ""	
	},
	textHeader: ""
}

export default SpeakerForm;