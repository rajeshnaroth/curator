import React from 'react'

const NewChannelForm = React.createClass({
	getInitialState() {
		return {
			channel:''
		}
	},
	valueChange(ev) {
		this.setState({channel: ev.target.value});
	},
	keyPress(ev) {
		if(ev.key === 'Enter') {
			this.props.addChannel(ev.target.value)
		}
	},
	render() {
		return (
			<div className="playlistForm">
				<div className="playlistForm">
					<label for="newChannelName">Add new Channel:</label>
					<input size="15" name="newChannelName" onChange={this.valueChange} onKeyPress={this.keyPress}/>
				</div>
			</div>
		)
	}
})

export default NewChannelForm;