import React from 'react'
import { Provider } from 'react-redux'
import { getFreshList } from '../../actions'

import Header          from '../frame/header'
import PlayerContainer from '../player/playerContainer'

let filmInfo = {
    id:'DnzCYUr17nk',
    title:'Portal',
    description:'Today, we talk Day 3, Visual Effects and pickup shots for Portal Combat!',
    rating:4,
    views:2000
}
const TestPage = React.createClass({
    componentWillMount() {

    },

    render() {    	        
        return (
        	<div>
        		<Header />
            </div>
        )
    }
})

export default TestPage