import React from 'react'
import TextField from '../form/textField'

const PlaylistForm = React.createClass({
	channelName:'',
	presetUser:'',
	loadPlayList(channelName) {
		return () => {
			this.presetUser = channelName;
			this.props.getPlayList(channelName);
		}
	},
	render() {
		return (
			<div className="playlistForm">
				<label for="channelName">Channel User Name or Id: </label>
				<TextField 
					size="15" 
					name="channelName" 
					presetValue={this.presetUser}
					onEnter={(val) => this.props.getPlayList(val)} 
					binder={(val) => (this.channelName = val)}
				/>
				<button onClick={() => this.props.getPlayList(this.channelName)}>GO</button>
				<p>
					<span className="fakeLink" onClick={this.loadPlayList('TEDtalksDirector')}>TED </span>  
					<span className="fakeLink" onClick={this.loadPlayList('disneysshows')}> Disney </span>
				</p>
			</div>
		)
	}
})
export default PlaylistForm;