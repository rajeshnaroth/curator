import React from 'react'

const PlaylistForm = React.createClass({
	getInitialState() {
		return {
			playlistId:'TEDtalksDirector'
		}
	},
	valueChange(ev) {
		console.log("playlistForm.js: ", ev.target.value);
		        
		this.setState({playlistId: ev.target.value});
	},
	keyPress(ev) {
		if(ev.key === 'Enter') {
			console.log(ev.target.value)
			this.props.getPlayList(ev.target.value)
		}
	},
	render() {
		return (
			<div className="playlistForm">
				<div className="playlistForm">
					<label for="channelName">Channel User Name or Id: </label>
					<input size="15" name="channelName" onChange={this.valueChange} onKeyPress={this.keyPress}/>
					<button onClick={() => this.props.getPlayList(this.state.playlistId)}>Get Playlists</button>
				</div>
			</div>
		)
	}
})

export default PlaylistForm;