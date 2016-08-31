import React from 'react'
import { Provider } from 'react-redux'
import { saveCuratedListToDB } from '../../actions'

import PlaylistFormContainer from '../youtube/playlistFormContainer'
import ChannelPlaylist       from '../youtube/channelPlaylist'
import CuratedShelf          from './curatedShelf'
import Channels              from '../common/channels'
import FilmBubbleContainer   from '../common/filmBubbleContainer'


const Curate = React.createClass({
	saveFlix() {
        console.log("curate.js: saveFlix()", this.props.channel, this.props.curationList);
        this.props.saveCuratedListToDB(this.props.channel, this.props.curationList)
    },
	render() {
        return (
                <div style={{position:'relative'}}>
                    <button onClick={this.saveFlix}>Save</button>
                    <div className="row">
                        <div className="col-lg-2 col-md-2">
                            <h5>Channels</h5>
                            <Channels channels={this.props.channels} linkDestination="/curate" removeChannel={this.props.removeChannel}/>
                        </div>
                    	<div className="col-lg-6 col-md-6">
                            <CuratedShelf 
                                curationList={this.props.curationList} 
                                addFilmToPlaylist={this.props.addFilmToPlaylist} 
                                deletePlaylist={this.props.deletePlaylist} 
                                deleteFilmFromCurateList={this.props.deleteFilmFromCurateList} 
                            />
                    	</div>
                    	<div className="col-lg-4 col-md-4">
                            <p>Enter a video-id to add</p>
                    		<PlaylistFormContainer />
                    		<ChannelPlaylist 
                                channelPlayList={this.props.channelPlayList} 
                                copyPlaylistToCuration={this.props.copyPlaylistToCuration}
                                showFilmBubble={this.props.showFilmBubble}
                                hideFilmBubble={this.props.hideFilmBubble}
                                />
                    	</div>
                    </div>
                    <FilmBubbleContainer />
		        </div>
        )
    }
})

export default Curate