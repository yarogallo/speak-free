import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './style/style.css';

class Modal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fadeout: false
		}
		this.onClickOutOfModal = this.onClickOutOfModal.bind(this);
		this.onPressEsc = this.onPressEsc.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}
	
	componentDidMount() {
		window.addEventListener('keyup', this.onPressEsc, false);
	}
	
	componentWillUnmount() {
		window.removeEventListener('keyup', this.onPressEsc, false);
		
	}
	
	closeModal() {
		this.setState({
			fadeout: true
		});
		window.setTimeout(()=> {
			this.props.onCloseModal();
		}, 1000);
	}
	
	onClickOutOfModal(evt) {
		if(evt.target.className === "modal") {
			this.closeModal();
			window.removeEventListener('keyup', this.onPressEsc, false);
		}
	}
	
	onPressEsc(evt) {
		if(evt.keyCode === 27) {
			this.closeModal();
		}
	}
	
	render() {
		const { fadeout } = this.state;
		const { children } = this.props;
		return (
			<section className="modal" onClick={this.onClickOutOfModal}>
				<section  className={`overlay ${ fadeout ? "close" : ""}`}>
					<div><button className="closeButton" onClick={this.closeModal}>x</button></div>
					<div className="content">{children()}</div>
				</section>
			</section>
		);
	}
}

Modal.propTypes = {
	onCloseModal: PropTypes.func,
	children: PropTypes.element
};

Modal.defaultProps = {
	onCloseModal: () => {},
	children: null,
};

export default Modal;