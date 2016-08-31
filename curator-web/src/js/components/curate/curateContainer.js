import React from 'react'
import { connect } from 'react-redux'

import Curate from './curate'
import { 
	saveCuratedListToDB, 
	addPlaylistToCurationList, 
	addFilmToPlaylist, 
	deleteFilmFromCurateList, 
	deletePlaylist,
	showFilmBubble,
	hideFilmBubble,
	deleteChannel
} from '../../actions'

const mapStateToProps = function(state, ownProps) {
	return {
		channel: ownProps.channel,
		curationList: state.curationList,
		channelPlayList: state.channelPlayList,
		channels:state.channels
	}
}

const mapDispatchToProps = function(dispatch, ownProps) {
	return {
		saveCuratedListToDB: function(channel, channelData) {
			console.log('curatecontainer saveCuratedTubeFlix', channelData)
			dispatch(saveCuratedListToDB(channel, channelData))
		},
		copyPlaylistToCuration: function(playlist) {
			console.log('curate container copyPlaylistToCuration ----->:')
			dispatch(addPlaylistToCurationList(playlist, dispatch))
		},
		addFilmToPlaylist: function(playlist, film) {
			console.log('curate container addFilmToPlaylist:', playlist, film)
			dispatch(addFilmToPlaylist(playlist, film, dispatch))
		},
		deleteFilmFromCurateList: function(playlist, film) {
			console.log('curate container addFilmToPlaylist:', playlist, film)
			dispatch(deleteFilmFromCurateList(playlist, film, dispatch))
		},
		deletePlaylist: function(playlist) {
			dispatch(deletePlaylist(playlist, dispatch))
		},
		showFilmBubble: function(film) {
			dispatch(showFilmBubble(film))
		},
		hideFilmBubble: function(film) {
			dispatch(hideFilmBubble(film))
		},
		removeChannel:function(channel) {
			console.log("curateContainer.js:removeChannel ", channel);
			        
			dispatch(deleteChannel(channel))
		}
	}
}

const CurateContainer = connect(mapStateToProps, mapDispatchToProps)(Curate)
export default CurateContainer