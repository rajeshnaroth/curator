import React from 'react'
import { Link } from 'react-router'

import Title from './title'
import Ratings from './ratings'
import Views from './views'
import Description from './description'

import { getVideoDetails } from '../../actions'

const FilmBubble = React.createClass({

	componentWillMount: function() {
		//this.props.getVideoDetails(this.props.videoId)
		// console.log("filmBubble.js: componentWillMount ");
	},
	componentWillUpdate: function(nextProps, nextState) { // prepare for an upcoming update
		if (nextProps.filmBubble.videoId) {
			// console.log("filmBubble.js: componentWillUpdate 2 getVideoDetails", nextProps);
			//this.props.getVideoDetails(nextProps.filmBubble.videoId)
		}
	},
	componentWillReceiveProps(nextProps) {
        // console.log("filmBubble.js: componentWillReceiveProps ", nextProps);
             
	},
	render() {
		// console.log("filmBubble.js render: ", this.props);
		        
		let iStyle = { visibility:this.props.filmBubble.visibility }
		return (
			<div className="filmBubble" style={iStyle}>
				<div className="videoDetailOverlay"></div>
				<div className="bubbleDetails">
				    <figure><img src={'https://i.ytimg.com/vi/' + this.props.filmDetails.id + '/hqdefault.jpg'}/></figure>
				    <Title text={this.props.filmDetails.title} />
				    <Ratings value={this.props.filmDetails.rating} />
				    <Views value={this.props.filmDetails.views} />
				    <Description text={this.props.filmDetails.description} />
				</div>
			</div>
		)
	}
})

export default FilmBubble