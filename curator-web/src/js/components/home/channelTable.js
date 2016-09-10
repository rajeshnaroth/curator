import React from 'react'
import { Link } from 'react-router'
import { newId } from '../../utils'
import ChannelPreview from './channelPreview'
let keyId = newId('chan-');
let cpKeyId = newId('cp-');

const ChannelTable = ({ channelDetails }) => { 
	let channelList = Object.keys(channelDetails)
	console.log("channelTable.js: ", channelList, channelDetails);
	        
    return (
    	<section className="channelTable">
		<ul >
		{
			channelList.map((ch, i) => <li className="row channelItem" key={'chn-' + i}>
				<Link to={ 'show/' + ch }>
					<h3 className="col-lg-3 col-md-3">{channelDetails[ch].details.title}</h3>
					<div className="col-lg-9 col-md-9 channelStrip">
							<ChannelPreview key={cpKeyId()} playlists={channelDetails[ch].playlists} />
					</div>
				</Link>
				</li>
			)
		}
		</ul>
		</section>
	)
}

export default ChannelTable
