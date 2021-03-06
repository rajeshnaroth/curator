import React from 'react'
import TextField from '../form/textField'

const PlaylistForm = React.createClass({
	getInitialState(){
		return {channelName:''}
	},
	loadPlayList(chName) {
		return () => {
			this.setState({channelName: chName})
			this.props.getPlayList(chName)
		}
	},
	render() {
		return (
			<div className="playlistForm">
				<label for="channelName">Enter a Channel Name/Id or a Video Id: </label>
				<TextField 
					size="30" 
					name="channelName" 
					placeholder="Enter a Channel Name/Id or a Video Id"
					presetValue={this.state.channelName}
					binder={ (val) => this.setState({channelName: val}) } 
					onEnter={ (val) => this.props.getPlayList(val) } 
				/>
				<button onClick={ () => this.props.getPlayList(this.state.channelName) }>Search</button>
				<p>
					<span>E.g.</span>
					<span className="fakeLink" onClick={this.loadPlayList('everyframeapainting')}> EveryFrameAPainting </span>  &nbsp;
					<span className="fakeLink" onClick={this.loadPlayList('Film4video')}> Film4video </span> &nbsp;
					<span className="fakeLink" onClick={this.loadPlayList('ArtTutorOnline')}> ArtTutorOnline </span>
				</p>
			</div>
		)
	}
})
export default PlaylistForm;