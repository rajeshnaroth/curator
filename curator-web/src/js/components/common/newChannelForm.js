import React from 'react'
import TextField from '../form/textField'

const NewChannelForm = React.createClass({

	render() {
		return (
			<div className="newChannelForm">
				<label for="newChannelName">Add New Channel: </label>
			    <TextField 
			   		isTextArea={false} 
			   		name="newChannelName" 
			   		placeholder="Type a new Channel Name"
			   		onEnter={(val) => this.props.addChannel(val)}/>
			   	<button onClick={ () => this.props.addChannel(val) }>Add</button>
			</div>
		)
	}
})

export default NewChannelForm;
//<input size="15" name="newChannelName" onChange={this.valueChange} onKeyPress={this.keyPress}/>