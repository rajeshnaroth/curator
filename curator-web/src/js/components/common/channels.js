import React from 'react'
import { Link } from 'react-router'

const Channels = ({ channels, linkDestination, removeChannel }) => { 
    return (
		<ul>
		{
			channels.map((ch, i) => <li key={'chn-' + i}>
					<Link to={ linkDestination + '/' + ch.id }>
						<span>{ch.id + ' : ' + ch.title}</span>
					</Link>
					{removeChannel ? <span className="fakeLink" onClick={(ev) => removeChannel(ch.id)}> X </span> : ''}
				</li>
			)
		}
		</ul>
	)
}

export default Channels