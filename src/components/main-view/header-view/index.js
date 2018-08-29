import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Modal from '../../modal';
import WriteOpinionForm from './write-opinion-form/index';

import './header-view.css';



class HeaderView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			openModal: false
		};
		this.toggleModal = this.toggleModal.bind(this);
		this.postOpinion = this.postOpinion.bind(this);
	}
	
	toggleModal() {
		this.setState( prevState => {
			return {
				openModal: !prevState.openModal
			};
		});	
	}
	
	postOpinion(opinion) {
		console.log(opinion);
	}
	
	render() {
		const TABS = {
			home: 'home',
			profile: 'profile',
			comment: 'comment'
		};
		
		const {
			activeTab
		} = this.props;
		
		const borderBottom = {
			borderColor: "var(--main-color-gray)" 
		};
		
		const {
			openModal
		} = this.state;
		
		return(
			<header className="header-view">
				<nav className="header-view-navigation">
					<a href="#" 
						className="header-view-navigation__item header-view-navigation__item_blue"
						style={activeTab === TABS.home ? borderBottom : {}}>home</a>
					<a 
						href="#" 
						className="header-view-navigation__item header-view-navigation__item_lila"
						style={activeTab === TABS.profile ? borderBottom : {}}>profile</a>
					<div className="header-view-navigation__item">
						<button 
							type="button"
							onClick={this.toggleModal}
							className="header-view-navigation__button header-view-navigation__button_red"
							style={activeTab === TABS.comment ? borderBottom : {}}>comment</button>
					</div>
				</nav>
				{ openModal 
					? <Modal 
						onCloseModal={this.toggleModal}
						children={() => <WriteOpinionForm onPostOpinion={this.postOpinion}/>}/>
					: null}
			</header>
		);
	}
}

HeaderView.propTypes = {
	activeTab: PropTypes.string.isRequired,
}

HeaderView.defaultProps = {
	activeTab: 'home'
}

export default HeaderView;