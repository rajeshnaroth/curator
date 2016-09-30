import React from 'react'
import { Link } from 'react-router'
import EditableText from '../form/editableText.js'
import TextField from '../form/textField.js'
import TextFieldMultiLine from '../form/textFieldMultiLine.js'

const mergedStyle = (currentStyles, newStyles) => ({style: Object.assign({}, currentStyles, newStyles) })//shortcut
const EditChannel = React.createClass({
	propTypes:{
		channel: React.PropTypes.string.isRequired,
		channelDetails: React.PropTypes.object.isRequired,
		saveChannelDetails: React.PropTypes.func.isRequired,
	},
	getInitialState() {
		return {
			title: '',
			description: ''
		}
	},
	componentWillReceiveProps(props) {
		this.setState({title:props.channelDetails.title || this.props.channel || ''})
		this.setState({description:props.channelDetails.description || ''})
	},
	saveTitle() {
		this.props.saveChannelDetails(this.props.channel, {
			title:this.state.title
		})
	},
	saveDescription() {
		this.props.saveChannelDetails(this.props.channel, {
			description:this.state.description
		})
	},
	setStateProp(stateProp) {
		const comp = this
		return (val) => {
			let newState = {}
			newState[stateProp] = val
			comp.setState(newState)
		}
	},
	render() {
		return (
			<div className="editChannel">
				<div>
					<fieldset>
						<EditableText 
							size="15" 
							name="editChannelName" 
							presetValue={ this.state.title } 
							binder={this.setStateProp('title')}
							onEnter={this.saveTitle}
						/>
					</fieldset>
					<fieldset>
						<EditableText 
							size="15" 
							isTextArea={true} 
							name="editChannelDescr" 
							presetValue={this.state.description || ''} 
							binder={this.setStateProp('description')}
							onEnter={this.saveDescription}
						/>
					</fieldset>
				</div>
			</div>
		)	
	}
})

export default EditChannel