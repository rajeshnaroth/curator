import React from 'react'
import { Provider } from 'react-redux'

import Playlist from './playlist'

import { newId } from '../../utils'
let keyId = newId('cpl-');

const ChannelPlaylist = React.createClass({
	render() {
		console.log("channelPlaylist.js: ", this.props);
		        
        return (
            <div className="curatorLists">
            { this.props.channelPlayList.map(item => 
            	<Playlist key={keyId()} 
            		playlist={item} 
            		copyPlaylistToCuration={this.props.copyPlaylistToCuration}
                    showFilmBubble={this.props.showFilmBubble}
                    hideFilmBubble={this.props.hideFilmBubble}
            	/>
            ) }
            </div>
        )
    }
})

export default ChannelPlaylist