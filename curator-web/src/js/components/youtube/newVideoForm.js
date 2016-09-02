import React from 'react'

import FilmDetails from '../common/filmDetails'

const NewVideoForm = React.createClass({
	getInitialState() {
		return {
			videoId:'',
		}
	},
	valueChange(ev) {
		this.setState({videoId: ev.target.value});
	},
	keyPress(ev) {
		if(ev.key === 'Enter') {
			this.props.getVideo(ev.target.value)
		}
	},
	render() {
		console.log('=====>', this.props.newVideo)
		return (
			<div>
				<div className="videoIdForm">
					<label for="videoId">Video Id: </label>
					<input size="11" id="newVideoId" name="videoId" onChange={this.valueChange} onKeyPress={this.keyPress}/>
				</div>
				<div>
					<FilmDetails {...this.props.newVideo} />
				</div>
			</div>
		)
	}
})

export default NewVideoForm;