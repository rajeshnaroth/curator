import React from 'react'
import { connect } from 'react-redux'

import Home from './home'
//import { getTubeFlix } from '../../actions'

const mapStateToProps = function(state, ownProps) {
	return {
		channelDetails:state.channelDetails
	}
}

const mapDispatchToProps = function(dispatch, ownProps) {
	return {
		
	}
}

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home)
export default HomeContainer