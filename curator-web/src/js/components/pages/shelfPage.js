import React from 'react'
import { Provider } from 'react-redux'

import Header                from '../frame/header'
import ShelfContainer        from '../shelf/shelfContainer'
import { fetchShowListFromDB }     from '../../actions'


const ShelfPage = React.createClass({
	componentWillMount() {
        this.props.route.store.dispatch(fetchShowListFromDB())
    },

    render() {
        return (
                <div>
                    <Header />
					<ShelfContainer />
                </div>
        )
    }
})

export default ShelfPage
