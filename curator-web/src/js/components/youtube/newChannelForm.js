import React from 'react'
import TextField from '../form/textField'

const NewChannelForm = React.createClass({
	render() {
		return (
			<div className="newChannelForm">
				<label for="newChannelName">Add new Channel:</label>
				<TextField size="15" name="newChannelName" onEnter={(val) => this.props.addChannel(val)}/>
			</div>
		)
	}
})

export default NewChannelForm;