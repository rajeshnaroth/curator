import React from 'react'
import { Provider } from 'react-redux'

import Header                from '../frame/header'
import ShelfContainer        from '../show/shelfContainer'
import { fetchShowListFromDB, fetchChannelsFromDB }     from '../../actions'


const ShowPage = React.createClass({
    componentWillMount(){
        // this.props.route.store.dispatch(fetchChannelsFromDB())
        let channel = this.props.params.channel || "default"
        this.props.route.store.dispatch(fetchShowListFromDB(channel))
    },

    componentWillReceiveProps(nextProps) {                
        let channel = nextProps.params.channel || "default"
        nextProps.route.store.dispatch(fetchShowListFromDB(channel))
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

export default ShowPage
