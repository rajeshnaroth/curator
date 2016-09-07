import React from 'react'
import { Provider } from 'react-redux'
import { saveCuratedListToDB } from '../../actions'

import CurationShelf           from './curationShelf'
import ChannelPlaylist         from '../youtube/channelPlaylist'
import PlaylistFormContainer   from '../youtube/playlistFormContainer'
import NewVideoFormContainer   from '../youtube/newVideoFormContainer'
import NewChannelFormContainer from '../common/newChannelFormContainer'
import Channels                from '../common/channels'
import FilmBubbleContainer     from '../common/filmBubbleContainer'


const Curate = React.createClass({
    propTypes: {
        channel: React.PropTypes.string.isRequired,
        curationList: React.PropTypes.object.isRequired,
        addFilmToPlaylist: React.PropTypes.func.isRequired,
        deletePlaylist: React.PropTypes.func.isRequired,
        deleteFilmFromCurateList: React.PropTypes.func.isRequired,
        addNewList: React.PropTypes.func.isRequired,
        makeCurrentTarget: React.PropTypes.func.isRequired
    },
	saveFlix() {
        console.log("curate.js: saveFlix()", this.props.channel, this.props.curationList);
        this.props.saveCuratedListToDB(this.props.channel, this.props.curationList)
    },
	render() {
        return (
                <div style={{position:'relative'}}>
                    
                    <div className="row">
                        <div className="col-lg-2 col-md-2">
                            <NewChannelFormContainer />
                            <h5>Channels</h5>
                            <Channels channels={this.props.channels} linkDestination="/curate" removeChannel={this.props.removeChannel}/>
                        </div>
                    	<div className="col-lg-6 col-md-6">
                            <CurationShelf 
                                channel={this.props.channel}
                                curationList={this.props.curationList} 
                                addFilmToPlaylist={this.props.addFilmToPlaylist} 
                                deletePlaylist={this.props.deletePlaylist} 
                                deleteFilmFromCurateList={this.props.deleteFilmFromCurateList} 
                                movePlayListUpInCurateList={this.props.movePlayListUpInCurateList} 
                                movePlayListDownInCurateList={this.props.movePlayListDownInCurateList} 
                                addNewList={this.props.addNewList} 
                                makeCurrentTarget={this.props.makeCurrentTarget}
                            />
                    	</div>
                    	<div className="col-lg-4 col-md-4">
                            <NewVideoFormContainer />
                    		<PlaylistFormContainer />
                    		<ChannelPlaylist 
                                channelPlayList={this.props.channelPlayList} 
                                copyPlaylistToCuration={this.props.copyPlaylistToCuration}
                                copyFilmToCuration={this.props.copyFilmToCuration}
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