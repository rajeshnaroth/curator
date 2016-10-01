import React from 'react'
import { Link } from 'react-router'
import { newId } from '../../utils'
import ChannelPreview from './channelPreview'
let keyId = newId('chan-');
let cpKeyId = newId('cp-');

const numFilms = (channel) => channel.playlists.map(pl => pl.films.length).reduce(((prev, added) => prev + added), 0)


const ChannelTable = ({ channelDetails }) => { 
	let channelList = Object.keys(channelDetails)	
	console.log("channelTable.js: ", channelDetails);
	                          
    return (
    	<section className="channelTable">
		<ul >
		{
			channelList.map((ch, i) => <li className="row channelItem" key={'chn-' + i}>
				<Link to={ 'show/' + ch }>
					<div className="col-lg-3 col-md-3">
						<h3>{channelDetails[ch].details.title}</h3>
						<p>{channelDetails[ch].details.description}</p>
					</div>
					<div className="col-lg-9 col-md-9 channelStrip">
						<ChannelPreview key={cpKeyId()} playlists={channelDetails[ch].playlists} />
						<h5>{numFilms(channelDetails[ch])} films</h5>
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
