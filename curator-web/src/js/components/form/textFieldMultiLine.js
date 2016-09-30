import React from 'react'

const TextFieldMultiLine = React.createClass({
	valueChange(ev) {	
		if (typeof this.props.binder === 'function') this.props.binder(ev.target.value)
	},
	keyPress(ev) {
		        
		if(ev.key === 'Enter') {
		console.log("textfieldMultiline.js: ", ev);
			this.props.onEnter(ev.target.value)
		}
	},
	render() {
		let pval = this.props.presetValue
console.log("textfieldMultiline.js: ", pval);
        
		return (<textarea
					class="editableText"
					placeHolderText="Click to edit"
					value={pval}
					size={this.props.size} 
					id={this.props.name} 
					name={this.props.name} 
					onChange={this.valueChange} 
					onKeyPress={this.keyPress} />
				)
	}
})

export default TextFieldMultiLine;