import React from 'react'
import { connect } from 'react-redux'

import Curate from './curate'
import { saveTubeFlix } from '../../actions'

const mapStateToProps = function(state, ownProps) {
	return {
		curationList: state.curationList,
		channelPlayList: state.channelPlayList
	}
}

const mapDispatchToProps = function(dispatch, ownProps) {
	return {
		saveCuratedTubeFlix: function(channelData) {
			console.log('curatecontainer saveCuratedTubeFlix', channelData)
			dispatch(saveTubeFlix(channelData))
		}
	}
}

const CurateContainer = connect(mapStateToProps, mapDispatchToProps)(Curate)
export default CurateContainer