import React from 'react'
import TextField from '../form/textField'

const PlaylistForm = React.createClass({
	channelName:'',
	render() {
		return (
			<div className="playlistForm">
				<label for="channelName">Channel User Name or Id: </label>
				<TextField 
					size="15" 
					name="channelName" 
					onEnter={(val) => this.props.getPlayList(val)} 
					binder={(val) => (this.channelName = val)}
				/>
				<button onClick={() => this.props.getPlayList(this.channelName)}>GO</button>
			</div>
		)
	}
})
export default PlaylistForm;