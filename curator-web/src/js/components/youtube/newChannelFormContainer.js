import React from 'react'
import { connect } from 'react-redux'

import NewChannelForm from './newChannelForm'
import { fetchVideosFromYouTube } from '../../actions'

const mapStateToProps = function(state, ownProps) {
	return {channels: state.channels}
}

const mapDispatchToProps = function(dispatch, ownProps) {

	return {
		addChannel: function(channel) {
			//dispatch(fetchVideosFromYouTube(playlistId))
		}
	}
}

export default const NewChannelFormContainer = connect(mapStateToProps, mapDispatchToProps)(NewChannelForm)