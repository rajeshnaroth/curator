import React from 'react'
import { Provider } from 'react-redux'

import Header from '../frame/header'
import CurateContainer from '../curate/curateContainer'
import { getListFromDBForCuration } from '../../actions'


const CuratorPage = React.createClass({
	componentWillMount() {
        this.props.route.store.dispatch(getListFromDBForCuration())
    },

    render() {
        return (
                <div>
                    <Header />
                    <CurateContainer />
                </div>
        )
    }
})

export default CuratorPage
