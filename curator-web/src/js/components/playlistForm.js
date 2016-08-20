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
				<form className="playlistForm">
					<input onChange={this.valueChange} value={this.state.playlistId}/>
					<button onClick={() => this.props.getPlayList(this.state.playlistId)}>Add</button>
				</form>
			</div>
		)
	}
})

export default PlaylistForm;