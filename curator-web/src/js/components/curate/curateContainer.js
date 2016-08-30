import React from 'react'
import { connect } from 'react-redux'

import Curate from './curate'
import { 
	saveCuratedListToDB, 
	addPlaylistToCurationList, 
	addFilmToPlaylist, 
	deleteFilmFromCurateList, 
	deletePlaylist } from '../../actions'

const mapStateToProps = function(state, ownProps) {
	return {
		curationList: state.curationList,
		channelPlayList: state.channelPlayList
	}
}

const mapDispatchToProps = function(dispatch, ownProps) {
	return {
		saveCuratedListToDB: function(channelData) {
			console.log('curatecontainer saveCuratedTubeFlix', channelData)
			dispatch(saveCuratedListToDB(channelData))
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
		}
	}
}

const CurateContainer = connect(mapStateToProps, mapDispatchToProps)(Curate)
export default CurateContainer