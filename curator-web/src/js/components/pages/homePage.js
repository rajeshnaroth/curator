import React from 'react'
import { Link } from 'react-router'

import Header from '../frame/header'
import HomeContainer from '../home/homeContainer'
import { fetchChannelDetailsFromDB }     from '../../actions'


const HomePage = React.createClass({
	componentWillMount() {
        this.props.route.store.dispatch(fetchChannelDetailsFromDB())
    },

    render() {
        return (
                <div>
                    <Header />
					<HomeContainer />
                </div>
        )
    }
})

export default HomePage
