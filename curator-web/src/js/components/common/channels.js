import React from 'react'
import { Link } from 'react-router'

const Channels = ({ channels, linkDestination, removeChannel }) => { console.log("channels.js: ", channels, channels.map);
        return (
	<ul>
	{
		channels.map((ch, i) => <li key={'chn-' + i}>
				<Link to={ linkDestination + '/' + ch }>
					<span>{ch}</span>
				</Link>
				{removeChannel ? <span onClick={(ev) => removeChannel(ch)}> X </span> : ''}
			</li>
		)
	}
	</ul>
)}

export default Channels