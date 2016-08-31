import React from 'react'
import { Provider } from 'react-redux'

import Header from '../frame/header'
import CurateContainer from '../curate/curateContainer'
import { getListFromDBForCuration, fetchChannelsFromDB } from '../../actions'


const CuratorPage = React.createClass({
    initialize(props) {
        props.route.store.dispatch(getListFromDBForCuration(props.params.channel || 'default'))
    },
    componentWillMount(){
        this.props.route.store.dispatch(fetchChannelsFromDB())
        this.initialize(this.props)
    },

	componentWillReceiveProps(nextProps) {
        console.log("curatorPage.js: componentWillReceiveProps", nextProps, this.props);
        this.initialize(nextProps)        
    },

    render() {
        return (
                <div>
                    <Header />
                    <CurateContainer channel={this.props.params.channel || 'default'}/>
                </div>
        )
    }
})

export default CuratorPage
