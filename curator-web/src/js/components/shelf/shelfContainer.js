import React from 'react'
import { connect } from 'react-redux'

import Shelf from './shelf'
import { getTubeFlix } from '../../actions'

const mapStateToProps = function(state, ownProps) {
	return {
		shelf: state.shelf, 
		channels:state.channels
	}
}

const mapDispatchToProps = function(dispatch, ownProps) {
	return {
		getTubeFlix: function() {
			dispatch(getTubeFlix())
		}
	}
}

const ShelfContainer = connect(mapStateToProps, mapDispatchToProps)(Shelf)
export default ShelfContainer