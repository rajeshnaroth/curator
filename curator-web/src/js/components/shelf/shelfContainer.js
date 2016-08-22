import React from 'react'
import { connect } from 'react-redux'

import Shelf from './shelf'
import { openPlayer } from '../../actions'

const mapStateToProps = function(state, ownProps) {
	return {shelf: state.shelf}
}

const mapDispatchToProps = function(dispatch, ownProps) {
	return {
		openPlayer: function(videoId) {
			console.log('shelf container startPlay', videoId)
			dispatch(openPlayer(videoId, dispatch))
		}
	}
}

const ShelfContainer = connect(mapStateToProps, mapDispatchToProps)(Shelf)
export default ShelfContainer