import React from 'react'
import { connect } from 'react-redux'

import NewChannelForm from './newChannelForm'
import { addChannel } from '../../actions'

const mapStateToProps = function(state, ownProps) {
	return {channels: state.channelSummary}
}

const mapDispatchToProps = function(dispatch, ownProps) {

	return {
		addChannel: function(channel) {
			dispatch(addChannel(channel))
		}
	}
}

const NewChannelFormContainer = connect(mapStateToProps, mapDispatchToProps)(NewChannelForm)
export default NewChannelFormContainer