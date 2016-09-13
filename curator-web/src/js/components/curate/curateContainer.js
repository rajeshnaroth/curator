import React from 'react'
import { connect } from 'react-redux'

import Curate from './curate'
import { 
	saveCuratedListToDB, 
	addPlaylistToCurationList, 
	addFilmToTargetCurationList, 
	addFilmToPlaylist, 
	moveFilmUpInCurateList, 
	moveFilmDownInCurateList, 
	deleteFilmFromCurateList, 
	movePlayListUpInCurateList,
	movePlayListDownInCurateList,
	deletePlaylist,
	addNewCuratePlaylist,
	showFilmBubble,
	hideFilmBubble,
	deleteChannel,
	setTargetPlayList,
	changePlaylistTitle
} from '../../actions'

const mapStateToProps = function(state, ownProps) {
	return {
		channel: ownProps.channel,
		curationList: state.curationList,
		channelPlayList: state.channelPlayList,
		channels:state.channelSummary
	}
}

const mapDispatchToProps = function(dispatch, ownProps) {
	return {
		copyPlaylistToCuration: function(playlist) {
			dispatch(addPlaylistToCurationList(ownProps.channel, playlist))
		},
		copyFilmToCuration: function(film) {
			dispatch(addFilmToTargetCurationList(ownProps.channel, film))
		},
		addFilmToPlaylist: function(playlist, film) {
			dispatch(addFilmToPlaylist(ownProps.channel, playlist, film))
		},
		moveFilmUpInCurateList: function(playlist, film) {
			dispatch(moveFilmUpInCurateList(ownProps.channel, playlist, film))
		},
		moveFilmDownInCurateList: function(playlist, film) {
			dispatch(moveFilmDownInCurateList(ownProps.channel, playlist, film))
		},
		deleteFilmFromCurateList: function(playlist, film) {
			dispatch(deleteFilmFromCurateList(ownProps.channel, playlist, film))
		},
		deletePlaylist: function(playlist) {
			dispatch(deletePlaylist(ownProps.channel, playlist))
		},
		movePlayListUpInCurateList: function(playlist) {
			dispatch(movePlayListUpInCurateList(ownProps.channel, playlist))
		},
		movePlayListDownInCurateList: function(playlist) {
			dispatch(movePlayListDownInCurateList(ownProps.channel, playlist))
		},
		makeCurrentTarget: function(playlist) {
			dispatch(setTargetPlayList(ownProps.channel, playlist))
		},
		savePlaylistTitle: function(playlist, title) {
			console.log("curateContainer.js: savePlaylistTitle", playlist, title);
			dispatch(changePlaylistTitle(ownProps.channel, playlist, title))
		},
		showFilmBubble: function(film) {
			dispatch(showFilmBubble(film))
		},
		hideFilmBubble: function(film) {
			dispatch(hideFilmBubble(film))
		},
		removeChannel:function(channel) {
			dispatch(deleteChannel(channel))
		},
		saveChannelDetails:function(channelDetails) {
			console.log("curateContainer.js: saveChannelDetails", channelDetails);
			        
			//dispatch(saveChannelDetails(channelDetails))
		},
		addNewList: function(listName) {
			dispatch(addNewCuratePlaylist(ownProps.channel, listName))        
		}
	}
}

const CurateContainer = connect(mapStateToProps, mapDispatchToProps)(Curate)
export default CurateContainer