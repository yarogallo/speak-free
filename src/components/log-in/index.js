import React, { Component } from "react";
import TextButton from '../text-button';
import SpeakerForm from '../speaker-form';
import Modal from '../modal';
import "./log-in.css";

class LogIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false	
		};
		this.showModalHandler = this.showModalHandler.bind(this);
		this.closeModalHandler = this.closeModalHandler.bind(this);
		this.createNewUser = this.createNewUser.bind(this);
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
	createNewUser(user) {
		window.alert(user);
	}
	render(){
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
							placeholder="example@domain.com"/>
						<input 
							id="password"
							className="log__input"
							type="email" 
							required 
							placeholder="password"/>
							<div>
								<TextButton text="log in"/>
							</div>
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