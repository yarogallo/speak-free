import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './opinion-body.css';
import TextButton from '../../text-button';
import { app } from '../../../helpers/windowEvents';

class OpinionBody extends Component {
	constructor(props) {
		super(props);
		this.state = {
			truncate: false,
			loadInfo: false
		};
		this.resizeSubKey = 0;
		this.animationId = 0;
    	this.handleResize = this.handleResize.bind(this);
		this.textRef = React.createRef();
		this.loadMoreText = this.loadMoreText.bind(this);
		this.showLesstext = this.showLesstext.bind(this);
		this.setTruncate = this.setTruncate.bind(this);
		this.resetTruncate = this.resetTruncate.bind(this);
	}
	componentDidMount() {
		if(this.textRef.current && this.textRef.current.clientHeight > 60) {
			this.setTruncate();
		}
		this.resizeSubKey = app.resizeEvent.subscribe(this.handleResize);
	}
	
	componentWillUnmount() {
		app.resizeEvent.unsubscribe(this.resizeSubKey);
	}
	
	handleResize() {
		const textHeight = this.textRef.current.clientHeight;
		if (textHeight > 58 && !this.state.truncate) {
			this.animationId = window.requestAnimationFrame(() => {
					this.setTruncate();
			});
		} 
		if(textHeight < 58 && this.state.truncate) {
			this.animationId = window.requestAnimationFrame(() => {
				this.resetTruncate();
			});
		}
	}
	
	resetTruncate() {
		this.setState({
			truncate: false,
			loadInfo: false
		});
	}
	
	setTruncate() {
		this.setState({
			truncate: true,
			loadInfo: {
				loadMore: true,
				loadLess: false
			}
		});
	}
	
	loadMoreText() {
		this.setState({
			truncate: false,
			loadInfo: {
				loadMore: false,
				loadLess: true
			}
		});
	}
	
	showLesstext() {
		this.setState({
			truncate: true,
			loadInfo: {
				loadMore: true,
				loadLess: false
			}
		});
	}
	
	loadMore() {
		const {loadInfo} = this.state; 
		return loadInfo.loadMore 
				?<TextButton 
					text="load more" 
					customClasses="opinion-body__button"
					onClickHandler={this.loadMoreText}/>
				:<TextButton 
					text="show less" 
					customClasses="opinion-body__button"
					onClickHandler={this.showLesstext}/> ;
	}
	
	render() {
		const { 
			truncate,
			loadInfo
		 } = this.state;
		const { opinion } = this.props;
		return (
			<div className="opinion-body">
				<p className={`opinion-body__text ${truncate ? "opinion-body__text_trucate" : ""}`} ref={this.textRef}>
					<span className="opinion-body__text_red">opinion:</span>
					{opinion}
				</p>
				<div className="opinion-body__button-container">
					{ (truncate || loadInfo) ? this.loadMore() : null}
				</div>
			</div>
		);
	}
}

OpinionBody.propTypes = {
	opinion: PropTypes.string.isRequired
};

OpinionBody.defaultProps = {
	opinion: ""
};

export default OpinionBody;