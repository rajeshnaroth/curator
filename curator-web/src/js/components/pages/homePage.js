import React from 'react'
import { Provider } from 'react-redux'
import { Link } from 'react-router'

import Header                from '../frame/header'
import { fetchShowListFromDB }     from '../../actions'


const ShelfPage = React.createClass({
	componentWillMount() {
        this.props.route.store.dispatch(fetchShowListFromDB())
    },

    render() {
        return (
                <div>
                    <Header />
					<div>
						<h2>Hi there</h2>
						<div className="firstMove">
							<p>Looks like you are new. Lets create your show.</p>
							<Link to="/curate">Click here to start curating</Link>
						</div>
					</div>
                </div>
        )
    }
})

export default ShelfPage
