import React from 'react'
import { Provider } from 'react-redux'

import CurateContainer from '../curate/curateContainer'

import { getFreshList } from '../../actions'


const CuratorPage = React.createClass({
	componentWillMount() {
        this.props.route.store.dispatch(getFreshList())
    },

    render() {
        return (
                <div>
                    <CurateContainer />
                </div>
        )
    }
})

export default CuratorPage
