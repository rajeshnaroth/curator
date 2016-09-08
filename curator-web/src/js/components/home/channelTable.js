import React from 'react'
import { Link } from 'react-router'

const ChannelTable = ({ channels }) => { 
    return (
		<ul>
		{
			channels.map((ch, i) => <li key={'chn-' + i}>
					<Link to={ 'show/' + ch.id }>
						<span>{ch.title}</span>
					</Link>
				</li>
			)
		}
		</ul>
	)
}

export default ChannelTable
