import React from 'react'

const EditableText = React.createClass({
	propTypes: {
		name:React.PropTypes.string.isRequired,
		onEnter:React.PropTypes.func.isRequired
	},
	getInitialState() {
		return {value: this.props.presetValue}
	},
	valueChange(ev) {
		this.setState({value:ev.target.value})
		if (typeof this.props.binder === 'function') {
			this.props.binder(ev.target.value)
		}
	},
	callCommit(val) {
		if (typeof this.props.onEnter === 'function') {
			this.props.onEnter(val)
		}
	},
	focusIn(ev) {
		console.log("editableText.js: focusIn");
		        
		ev.stopPropagation();
	},
	focusOut(ev) {
		console.log("editableText.js: focusOut");
		this.callCommit(ev.target.value)
		ev.stopPropagation();
	},
	keyPress(ev) {
		if(ev.key === 'Enter') {
			this.callCommit(ev.target.value)
		}
		ev.stopPropagation();
	},
	render() {

		return (<input type="text"
					className="editableText"
					value={this.state.value}
					size={this.state.value.length + 1} 
					id={this.props.name} 
					name={this.props.name} 
					onFocus={this.focusIn} 
					onClick={this.focusIn} 
					onChange={this.valueChange} 
					onKeyPress={this.keyPress} 
					onBlur={this.focusOut}
				/> 
				)
	}
})

export default EditableText;