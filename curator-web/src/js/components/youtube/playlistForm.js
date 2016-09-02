import React from 'react'

const PlaylistForm = React.createClass({
	getInitialState() {
		return {
			playlistId:'TEDtalksDirector'
		}
	},
	valueChange(ev) {
		this.setState({playlistId: ev.target.value});
	},
	keyPress(ev) {
		if(ev.key === 'Enter') {
			this.props.getPlayList(ev.target.value)
		}
	},
	render() {
		return (
			<div className="playlistForm">
				<label for="channelName">Channel User Name or Id: </label>
				<input size="15" name="channelName" onChange={this.valueChange} onKeyPress={this.keyPress}/>
			</div>
		)
	}
})
//					<button onClick={() => this.props.getPlayList(this.state.playlistId)}>Get Playlists</button>


export default PlaylistForm;