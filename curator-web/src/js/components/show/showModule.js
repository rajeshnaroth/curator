showModule.js

import React from 'react'
import PlaylistFormContainer from '../curate/playlistFormContainer'
import ShelfContainer from './shelfContainer'
import PlayerContainer from '../player/PlayerContainer'

const ShowModule = React.createClass({
	render() {
		return (
			<div>
			<PlaylistFormContainer />
			<ShelfContainer />
			<PlayerContainer />
			</div>
			)
	}
})

export default ShowModule