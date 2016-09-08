import React from 'react'
import { Link } from 'react-router'
import { newId } from '../../utils'
let keyId = newId('chan-');
let filmKeyId = newId('fk-');

const ChannelTable = ({ channelDetails }) => { 
	let channelList = Object.keys(channelDetails)
	console.log("channelTable.js: ", channelList, channelDetails);
	        
    return (
    	<section className="channelTable">
		<ul>
		{
			channelList.map((ch, i) => <li key={'chn-' + i}>
					<Link to={ 'show/' + ch }>
						<div className="channelStrip">
						<h3>{channelDetails[ch].details.title}</h3>
						<h6>featuring</h6>
						<ul>
						{
							channelDetails[ch].playlists.map(plist => (
									<li key={keyId()}>
										<h4>{plist.genre}</h4>
										<ul className="filmStrip">
										{
											plist.films.map(film => (
												<li  key={filmKeyId()}>
													<figure><img src={'https://i.ytimg.com/vi/' + film.id + '/default.jpg'}/></figure>
												</li>
											))
										}
										</ul>
									</li>
								))
						}
						</ul>
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
