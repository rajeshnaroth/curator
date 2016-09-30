import React from 'react'
import { Link } from 'react-router'
import EditableText from '../form/editableText.js'
import TextField from '../form/textField.js'
import TextFieldMultiLine from '../form/textFieldMultiLine.js'
import Sequencer from '../home/sequencer'
import { getJson, toPromise } from '../../utils'

const mergedStyle = (currentStyles, newStyles) => ({style: Object.assign({}, currentStyles, newStyles) })//shortcut
const EditChannel = React.createClass({
	propTypes:{
		channel: React.PropTypes.string.isRequired,
		channelDetails: React.PropTypes.object.isRequired,
		saveChannelDetails: React.PropTypes.func.isRequired,
	},
	getInitialState() {
		return {
			isEditing:false,
			style: {
				opacity:0,
				maxHeight:0,
			},
			title: '',
			description: ''
		}
	},
	componentWillReceiveProps(props) {
		console.log("editChannel.js: componentWillReceiveProps", props);
		        
		this.setState({title:props.channelDetails.title || this.props.channel || ''})
		this.setState({description:props.channelDetails.description || ''})
	},
	componentWillUnmount() {
		if (this.startEditSequence) {
			this.startEditSequence.cancel()
		}
		if (this.stopEditSequence) {
			this.stopEditSequence.cancel()
		}
	},
	startEditing() {
		this.startEditSequence = Sequencer.create()
		this.startEditSequence.carryOut(() => {
			this.setState({ 'style':{ opacity:0, maxHeight:100, transition:'opacity 1s, max-height 2s', overflow:'hidden' } })
		});
		this.startEditSequence.wait(1000)
		this.startEditSequence.carryOut(() => {
			this.setState(mergedStyle(this.state.style, { opacity:1 }))
		});
		this.startEditSequence.carryOut(() => {
			this.setState({ isEditing:true })
		});
		
		this.startEditSequence.start()
	},
	stopEditing() {
		console.log("editChannel.js: ");
		        
		this.props.saveChannelDetails(this.props.channel, {
			title:this.state.title, 
			description:this.state.description
		})
		this.stopEditSequence = Sequencer.create()
		this.stopEditSequence.carryOut(() => {
			this.setState({ 'style':{ opacity:0, maxHeight:0, transition:'opacity 1s, max-height 2s', overflow:'hidden' } })
		});
		// this.stopEditSequence.wait(2000)
		this.stopEditSequence.waitAndCarryOut(() => {
			this.setState({ isEditing:false })
		}, 2000);
		
		this.stopEditSequence.start()
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
				<p style={{display:(this.state.isEditing ? 'none' : 'block')}} onClick={this.startEditing}>Edit Channel</p>
				<div style={this.state.style}>
					<fieldset>
						<label for="editChannelName">Title:</label>
						<EditableText 
							size="15" 
							name="editChannelName" 
							presetValue={ this.state.title } 
							binder={this.setStateProp('title')}/>
					</fieldset>
					<fieldset>
						<label for="editChannelDescr">Description:</label>
						<EditableText 
							size="15" 
							isTextArea={true} 
							name="editChannelDescr" 
							presetValue={this.state.description || ''} 
							binder={this.setStateProp('description')}/>
					</fieldset>
				</div>
				<p style={{display:(this.state.isEditing ? 'block' : 'none')}} onClick={this.stopEditing}>Save</p>
			</div>
		)	
	}
})

export default EditChannel