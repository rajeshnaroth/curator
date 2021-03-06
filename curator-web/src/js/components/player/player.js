import React from 'react'
import { Link, browserHistory } from 'react-router'

const ASPECT = 16/9
const Player = React.createClass({
	render: function() {
		console.log("player.js: ", browserHistory);
		let iframeContent = ''        
		if (this.props.player.videoId) {
			let videoUrl = 'https://www.youtube.com/embed/' + this.props.player.videoId
			//<iframe width="560" height="315" src="https://www.youtube.com/embed/7oJUOsgoplQ" frameborder="0" allowfullscreen></iframe>
			console.log(videoUrl)
			iframeContent = <iframe src={videoUrl} frameborder="0" allowfullscreen></iframe>
		}
		let iStyle = { visibility:this.props.player.visibility }
		//Compute iframe width & height
		let width = 720
		let height = 480
		let availableWidth = window.innerWidth
		let availableHeight = window.innerHeight - 30 // COnsider the other elements stacked on top
		if (availableWidth / window.innerHeight >  ASPECT) {//too wide
			height = availableHeight
			width = availableHeight * ASPECT
		} else {
			width = availableWidth
			height = availableWidth / ASPECT
		}
		let iframeStyle = {width,height}

		console.log('wxh', window.innerWidth, window.innerHeight)
		return (

				<div className="playerOverlay" style={iStyle}>
					{/*<Link to={'/'}>
				    	<p className="playerControls" onClick={browserHistory.goBack}>X Close Player</p>
				    </Link>*/}
					<div className="playerContent">
						
						<div className="iframeContent" style={iframeStyle}>
							{iframeContent}
						</div>
					</div>
				</div>
		)	
	}
})

export default Player