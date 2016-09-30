import React from 'react'

const EditableText = React.createClass({
	propTypes: {
		isTextArea:React.PropTypes.bool,
		name:React.PropTypes.string.isRequired,
		onEnter:React.PropTypes.func,
		binder:React.PropTypes.func,
	},
	getInitialState() {
		return {value: this.props.presetValue}
	},
	componentWillReceiveProps(props) {
		console.log("editableText.js: componentWillReceiveProps", props);
		        
		this.setState({value: props.presetValue})
	},
	valueChange(ev) {
		this.setState({value:ev.target.value})
		console.log("editableText.js: valueChange", ev.target.value);        
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
		ev.stopPropagation();
	},
	focusOut(ev) {
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

		let inputProps = {
			className:"editableText",
			size:this.state.value.length + 1,
			id:this.props.name,
			name:this.props.name,
			onFocus:this.focusIn,
			onClick:this.focusIn,
			onChange:this.valueChange,
			onKeyPress:this.keyPress,
			onBlur:this.focusOut
		}
		if (this.props.isTextArea) {
			return (<textarea type="text" {...inputProps} value={this.state.value} placeholder="Click to Edit"></textarea>)
		} else {
			return (<input type="text" value={this.state.value} {...inputProps} />)
		}
	}
})

export default EditableText