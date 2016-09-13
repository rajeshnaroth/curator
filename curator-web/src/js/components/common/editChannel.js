import React from 'react'
import { Link } from 'react-router'
import TextField from '../form/textField.js'
import TextFieldMultiLine from '../form/textFieldMultiLine.js'

const Channels = React.createClass({
	addChannel() {
		return (val) => console.log('editChannel', val)
	},
	render() {
		return (
			<div>
				<label for="editChannel">Title</label>
				<TextField size="15" name="editChannel" onEnter={this.addChannel}/>
				<TextFieldMultiLine size="15" name="editChannel" onEnter={this.addChannel}/>
				<button onClick={this.addChannel}>Save</button>
			</div>
		)	
	}
})

export default Channels