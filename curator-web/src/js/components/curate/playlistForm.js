import React from 'react'

const PlaylistForm = React.createClass({
	getInitialState() {
		return {
			playlistId:''
		}
	},
	valueChange(event) {
		this.setState({playlistId: event.target.value});
	},
	render() {
		return (
			<div className="playlistForm">
				<div className="playlistForm">
					<label for="channelName">Channel User Name: </label>
					<input name="channelName" onChange={this.valueChange} value={this.state.playlistId}/>
					<button onClick={() => this.props.getPlayList(this.state.playlistId)}>Add</button>
				</div>
			</div>
		)
	}
})

export default PlaylistForm;