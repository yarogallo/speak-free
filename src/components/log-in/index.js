import React, { Component } from "react";
import TextButton from '../text-button';
import SpeakerForm from '../speaker-form';
import Modal from '../modal';
import "./log-in.css";
import { Link } from 'react-router-dom';

class LogIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
			email: "",
			password: ""
		};
		this.showModalHandler = this.showModalHandler.bind(this);
		this.closeModalHandler = this.closeModalHandler.bind(this);
		this.createNewUser = this.createNewUser.bind(this);
		this.changeInputValue = this.changeInputValue.bind(this);
	}
	showModalHandler() {
		this.setState({
			showModal: true
		});
	}
	closeModalHandler() {
		this.setState({
			showModal: false
		});
	}
	changeInputValue(field) {
		return (value) => {
				this.setState({
				[field]: value
			});
		}
	}
	createNewUser(user) {
		this.closeModalHandler();
		this.changeInputValue("email")(user.mail);
		this.changeInputValue("password")(user.password);
	}
	render(){
		const {
			email,
			password
		} = this.state;

		return (
			<section className="log-in">
				 <header className="log__header">
					 <h1 className="log__title">Welcome to SpeakFree</h1>
				</header>
				 <section className="log__body log_flex log_column log_center">
					<TextButton text="new speaker" onClickHandler={this.showModalHandler}/>
					 <p className="log__p">-or-</p>
					<form className="log_form log_flex log_column log_end">
						<input 
							id="email" 
							className="log__input"
							type="email" 
							required 
							placeholder="example@domain.com"
							value={email}
							onChange={(evt) => {this.changeInputValue("email")(evt.target.value)}}/>
						<input 
							id="password"
							className="log__input"
							type="password" 
							required 
							placeholder="password"
							value= {password}
							onChange={(evt) => {this.changeInputValue("password")(evt.target.value)}}/>
							{email && password 
							?<Link to="/home">
								<TextButton text="log in"/>
							</Link> 
							: <div>
								<TextButton text="log in"/>
							</div>}
					</form>
				 </section>
				 {this.state.showModal
					? <Modal 
						children={() => <SpeakerForm textHeader="new account" onSubmitData={this.createNewUser}/>} 
						onCloseModal={this.closeModalHandler}/> 
					: null}
			</section>
		);
	}
}

export default LogIn;