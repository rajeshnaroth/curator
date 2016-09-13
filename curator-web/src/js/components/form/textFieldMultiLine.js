import React from 'react'

const TextFieldMultiLine = React.createClass({
	valueChange(ev) {	
		if (typeof this.props.binder === 'function') this.props.binder(ev.target.value)
	},
	keyPress(ev) {
		if(ev.key === 'Enter') {
			this.props.onEnter(ev.target.value)
		}
	},
	render() {
		let pval = this.props.presetValue

		return (<textarea 
					size={this.props.size} 
					id={this.props.name} 
					name={this.props.name} 
					onChange={this.valueChange} 
					onKeyPress={this.keyPress} />
				)
	}
})

export default TextFieldMultiLine;