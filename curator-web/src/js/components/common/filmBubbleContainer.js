import React from 'react'
import { connect } from 'react-redux'

import FilmBubble from './filmBubble'
import { getVideoDetails } from '../../actions'

const mapStateToProps = function(state, ownProps) {
	return {
		filmDetails: state.filmDetails,
		filmBubble: state.filmBubble,
		videoId:ownProps.videoId
	}
}

const mapDispatchToProps = function(dispatch, ownProps) {
	return {
		getVideoDetails: function(videoId) {
			dispatch(getVideoDetails(videoId, dispatch))
		}
	}
}

const FilmBubbleContainer = connect(mapStateToProps, mapDispatchToProps)(FilmBubble)
export default FilmBubbleContainer