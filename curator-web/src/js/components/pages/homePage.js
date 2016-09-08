import React from 'react'
import { Link } from 'react-router'

import Header from '../frame/header'
import HomeContainer from '../home/homeContainer'
import { fetchChannelsFromDB }     from '../../actions'


const HomePage = React.createClass({
	componentWillMount() {
        this.props.route.store.dispatch(fetchChannelsFromDB())
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
