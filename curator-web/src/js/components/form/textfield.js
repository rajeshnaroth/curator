import React from 'react'

const TextField = React.createClass({
	valueChange(ev) {
		if (this.props.binder) {
			this.props.binder(ev.target.value)
		}
	},
	keyPress(ev) {
		if(ev.key === 'Enter') {
			this.props.onEnter(ev.target.value)
		}
	},
	render() {
		return (<input 
					size={this.props.size} 
					id={this.props.name} 
					name={this.props.name} 
					onChange={this.valueChange} 
					onKeyPress={this.keyPress}/> 
				)
	}
})

export default TextField;