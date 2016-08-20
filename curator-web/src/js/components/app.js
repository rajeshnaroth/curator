import React from 'react'
import {Provider} from 'react-redux'

import PlaylistFormContainer from './playlistFormContainer'
import ShelfContainer from './shelf/shelfContainer'
import {getFreshList} from '../actions'

require('../../scss/app.scss') // Tells webpack to include this.

const App = React.createClass({

    componentWillMount() {
        this.props.store.dispatch(getFreshList())
    },

    render() {
        return (
            <Provider store={this.props.store}>
                <div>
                    <PlaylistFormContainer />
                    <ShelfContainer />
                </div>
            </Provider>
        )
    }
})

export default App