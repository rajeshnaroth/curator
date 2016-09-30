import React from 'react'
import { Link } from 'react-router'

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
				
			</div>
		)	
	}
})

export default Channels
