import React from 'react'
import { Provider } from 'react-redux'
import { getFreshList } from '../../actions'

import Header          from '../frame/header'
import PlayerContainer from '../player/PlayerContainer'

const TestPage = React.createClass({
    componentWillMount() {

    },

    render() {
    	console.log("TestPage.js: ", this.props);
    	        
        return (
        	<div>
        		<Header />
                <PlayerContainer />
            </div>
        )
    }
})

export default TestPage