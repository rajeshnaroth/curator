import React from 'react'
import { Provider } from 'react-redux'
import { triggerOpenPlayer } from '../../actions'

import PlayerContainer from '../player/PlayerContainer'

const PlayerPage = React.createClass({
    componentWillMount() {
		this.props.route.store.dispatch(triggerOpenPlayer(this.props.params.videoId))
    },

    render() {
        return ( <PlayerContainer /> )
    }
})

export default PlayerPage