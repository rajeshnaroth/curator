import React from 'react'
import { connect } from 'react-redux'

import NewVideoForm from './newVideoForm'
import { fetchNewVideoFromYouTube } from '../../actions'

const mapStateToProps = function(state, ownProps) {
	return {newVideo: state.newVideo}
}

const mapDispatchToProps = function(dispatch, ownProps) {

	return {
		getVideo: function(videoId) {
			dispatch(fetchNewVideoFromYouTube(videoId))
		}
	}
}

const NewVideoFormContainer = connect(mapStateToProps, mapDispatchToProps)(NewVideoForm)

export default NewVideoFormContainer