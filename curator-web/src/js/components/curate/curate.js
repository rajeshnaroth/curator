import React from 'react'
import { Provider } from 'react-redux'
import { saveCuratedListToDB } from '../../actions'

import PlaylistFormContainer from '../youtube/playlistFormContainer'
import ChannelPlaylist       from '../youtube/channelPlaylist'
import CuratedShelf          from './curatedShelf'


const Curate = React.createClass({
	saveFlix() {
        console.log("curate.js: saveFlix()", this.props.curationList);
        this.props.saveCuratedListToDB(this.props.curationList)
    },
	render() {
        
                
        return (
                <div>
                    
                    <button onClick={this.saveFlix}>Save</button>
                    <div className="row">
                    	<div className="col-lg-6 col-md-6">
                    		<p>Enter a video-id to add</p>
                            <CuratedShelf 
                                curationList={this.props.curationList} 
                                addFilmToPlaylist={this.props.addFilmToPlaylist} 
                                deletePlaylist={this.props.deletePlaylist} 
                            />
                    	</div>
                    	<div className="col-lg-6 col-md-6">
                    		<PlaylistFormContainer />
                    		<ChannelPlaylist 
                                channelPlayList={this.props.channelPlayList} 
                                copyPlaylistToCuration={this.props.copyPlaylistToCuration}
                                />
                    	</div>
                    </div>
		        </div>
        )
    }
})

export default Curate