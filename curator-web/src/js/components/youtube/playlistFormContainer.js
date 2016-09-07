import React from 'react'
import { connect } from 'react-redux'

import PlaylistForm from './playlistForm'
import { fetchPlaylistsFromYouTube } from '../../actions'

const mapStateToProps = function(state, ownProps) {
	return {shelf: state.shelf}
}

const mapDispatchToProps = function(dispatch, ownProps) {

	return {
		getPlayList: function(playlistId) {			        
			dispatch(fetchPlaylistsFromYouTube(playlistId))
		}
	}
}

const PlaylistFormContainer = connect(mapStateToProps, mapDispatchToProps)(PlaylistForm)

export default PlaylistFormContainer