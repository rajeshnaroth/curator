import React from 'react'
import { Provider } from 'react-redux'
import { saveCuratedListToDB } from '../../actions'

import CurationShelf           from './curationShelf'
import ChannelPlaylist         from '../youtube/channelPlaylist'
import PlaylistFormContainer   from '../youtube/playlistFormContainer'
import NewChannelFormContainer from '../common/newChannelFormContainer'
import Channels                from '../common/channels'
import FilmBubbleContainer     from '../common/filmBubbleContainer'
import EditChannel             from '../common/editChannel'

const Curate = React.createClass({
    propTypes: {
        channel: React.PropTypes.string.isRequired,
        curationList: React.PropTypes.object.isRequired,
        addFilmToPlaylist: React.PropTypes.func.isRequired,
        deletePlaylist: React.PropTypes.func.isRequired,
        deleteFilmFromCurateList: React.PropTypes.func.isRequired,
        addNewList: React.PropTypes.func.isRequired,
        makeCurrentTarget: React.PropTypes.func.isRequired,
        saveChannelDetails: React.PropTypes.func.isRequired
    },
	saveFlix() {
        this.props.saveCuratedListToDB(this.props.channel, this.props.curationList)
    },
	render() {
        console.log("curate.js: ", this.props.curationList);
                
        return (
                <section style={{position:'relative'}}>
                    
                    <div className="row">
                        <div className="col-lg-2 col-md-2">
                            <h5>Channels</h5>
                            <Channels 
                                channels={this.props.channels} 
                                linkDestination="/curate" 
                                saveChannelDetails={this.props.saveChannelDetails}
                                removeChannel={this.props.removeChannel}/>
                            <NewChannelFormContainer />
                        </div>
                    	<div className="col-lg-6 col-md-6">
                            <EditChannel 
                                channel={this.props.channel} 
                                channelDetails={this.props.curationList.details} 
                                saveChannelDetails={this.props.saveChannelDetails}
                            />

                            <CurationShelf 
                                channel={this.props.channel}
                                curationList={this.props.curationList} 
                                addFilmToPlaylist={this.props.addFilmToPlaylist} 
                                deletePlaylist={this.props.deletePlaylist} 
                                moveFilmUpInCurateList={this.props.moveFilmUpInCurateList} 
                                moveFilmDownInCurateList={this.props.moveFilmDownInCurateList} 
                                deleteFilmFromCurateList={this.props.deleteFilmFromCurateList} 
                                movePlayListUpInCurateList={this.props.movePlayListUpInCurateList} 
                                movePlayListDownInCurateList={this.props.movePlayListDownInCurateList} 
                                addNewList={this.props.addNewList} 
                                makeCurrentTarget={this.props.makeCurrentTarget}
                                savePlaylistTitle={this.props.savePlaylistTitle}
                            />
                    	</div>
                    	<div className="col-lg-4 col-md-4">
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
		        </section>
        )
    }
})

export default Curate