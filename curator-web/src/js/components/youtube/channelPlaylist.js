import React from 'react'
import { Provider } from 'react-redux'

import Playlist from './playlist'


const ChannelPlaylist = React.createClass({
	render() {
        return (
            <div className="curatorLists">
            { this.props.channelPlayList.map(item => <Playlist playlist={item} />) }
            </div>
        )
    }
})

export default ChannelPlaylist