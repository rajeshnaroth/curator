import React from 'react'
import { connect } from 'react-redux'

import Curate from './curate'
import { 
	saveCuratedListToDB, 
	addPlaylistToCurationList, 
	addFilmToPlaylist, 
	deleteFilmFromCurateList, 
	deletePlaylist,
	addNewCuratePlaylist,
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
		copyPlaylistToCuration: function(playlist) {
			console.log('curate container copyPlaylistToCuration ----->:')
			dispatch(addPlaylistToCurationList(ownProps.channel, playlist))
		},
		addFilmToPlaylist: function(playlist, film) {
			console.log('curate container addFilmToPlaylist:', playlist, film)
			dispatch(addFilmToPlaylist(ownProps.channel, playlist, film))
		},
		deleteFilmFromCurateList: function(channel, playlist, film) {
			console.log('curate container deleteFilmFromCurateList:', channel, playlist, film)
			dispatch(deleteFilmFromCurateList(channel, playlist, film))
		},
		deletePlaylist: function(playlist) {
			dispatch(deletePlaylist(ownProps.channel, playlist))
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
		},
		addNewList: function(listName) {
			console.log("curateContainer.js: ", 'addnewList', ownProps.channel, listName);
			dispatch(addNewCuratePlaylist(ownProps.channel, listName))        
		}
	}
}

const CurateContainer = connect(mapStateToProps, mapDispatchToProps)(Curate)
export default CurateContainer