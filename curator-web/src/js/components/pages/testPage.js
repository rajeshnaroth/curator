import React from 'react'
import { Provider } from 'react-redux'
import { getFreshList } from '../../actions'

import PlayerContainer from '../player/PlayerContainer'

const TestPage = React.createClass({
    componentWillMount() {

    },

    render() {
    	console.log("TestPage.js: ", this.props);
    	        
        return (
                <PlayerContainer />
        )
    }
})

export default TestPage