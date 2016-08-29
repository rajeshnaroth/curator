import React from 'react'
import { connect } from 'react-redux'

import PlaylistForm from './playlistForm'
import { fetchVideosFromYouTube } from '../../actions'

const mapStateToProps = function(state, ownProps) {
	return {shelf: state.shelf}
}

const mapDispatchToProps = function(dispatch, ownProps) {

	return {
		getPlayList: function(playlistId) {
			console.log("playlistFormContainer.js: ", playlistId);
			        
			dispatch(fetchVideosFromYouTube(playlistId))
		}
	}
}

const PlaylistFormContainer = connect(mapStateToProps, mapDispatchToProps)(PlaylistForm)

export default PlaylistFormContainer