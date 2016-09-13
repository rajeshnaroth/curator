import React from 'react'
import { Link } from 'react-router'
import EditChannel from './editChannel'

const Channels = React.createClass({
	render() {
		return (
			<div>
				<ul>
				{
					this.props.channels.map(
						(ch, i) => <li key={'chn-' + i}>

							<Link to={ this.props.linkDestination + '/' + ch.id }>
								<span>{ch.title}</span>
							</Link>
							{this.props.removeChannel ? <span className="fakeLink" onClick={(ev) => this.props.removeChannel(ch.id)}> X </span> : ''}
						</li>
					)
				}
				</ul>
				<EditChannel onSave={this.props.saveChannel}/>
			</div>
		)	
	}
})

export default Channels
