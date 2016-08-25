import React from 'react'
import { Provider } from 'react-redux'

import ShelfContainer        from '../shelf/shelfContainer'
import PlayerContainer       from '../player/PlayerContainer'
import { getListFromDB }      from '../../actions'


const ShelfPage = React.createClass({
	componentWillMount() {
        this.props.route.store.dispatch(getListFromDB())
    },

    render() {
        return (
                <div>
					<ShelfContainer />
                </div>
        )
    }
})

export default ShelfPage
