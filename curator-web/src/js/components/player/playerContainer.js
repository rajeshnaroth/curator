import React from 'react'
import { connect } from 'react-redux'

import Player from './player'
import { closePlayer } from '../../actions'

const mapStateToProps = function(state, ownProps) {
	return {player: state.player}
}

const mapDispatchToProps = function(dispatch, ownProps) {
	return {
		closePlayer: function() {
			console.log('player cont closePlayer')
			dispatch(closePlayer(dispatch))
		}
	}
}

const PlayerContainer = connect(mapStateToProps, mapDispatchToProps)(Player)
export default PlayerContainer