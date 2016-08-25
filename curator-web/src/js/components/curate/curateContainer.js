import React from 'react'
import { connect } from 'react-redux'

import Curate from './curate'
import { saveFlix, getFlix } from '../../actions'

const mapStateToProps = function(state, ownProps) {
	return {curator: state.curator}
}

const mapDispatchToProps = function(dispatch, ownProps) {
	return {
		saveFlix: function(channelData) {
			console.log('curatecontainer saveFlix', channelData)
			dispatch(saveFlix(channelData))
		}
	}
}

const CurateContainer = connect(mapStateToProps, mapDispatchToProps)(Curate)
export default CurateContainer