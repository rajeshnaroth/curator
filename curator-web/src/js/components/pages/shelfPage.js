import React from 'react'
import { Provider } from 'react-redux'

import PlaylistFormContainer from '../curate/playlistFormContainer'
import ShelfContainer        from '../shelf/shelfContainer'
import PlayerContainer       from '../player/PlayerContainer'
import { getFreshList }      from '../../actions'


const ShelfPage = React.createClass({
	componentWillMount() {
        this.props.route.store.dispatch(getFreshList())
    },

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

export default ShelfPage
