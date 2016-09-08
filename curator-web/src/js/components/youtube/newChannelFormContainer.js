import React from 'react'
import { connect } from 'react-redux'

import NewChannelForm from './newChannelForm'
import { addFilmToTargetCurationList } from '../../actions'

const mapStateToProps = function(state, ownProps) {
	return {channels: state.channelSummary}
}

const mapDispatchToProps = function(dispatch, ownProps) {

	return {
		copyFilmToCuration: function(film) {
			dispatch(addFilmToTargetCurationList(ownProps.channel, film))
		}
	}
}

export default const NewChannelFormContainer = connect(mapStateToProps, mapDispatchToProps)(NewChannelForm)