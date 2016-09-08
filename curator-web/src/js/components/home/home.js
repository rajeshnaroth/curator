import React from 'react'
import { Link } from 'react-router'
import ChannelTable from './channelTable'


const Home = React.createClass({
    propTypes: {
        
    },
	render() {
        return (
            <section className="center-block">
            	<div className="row text-center">
            		<div className="col-lg-12 col-md-12">
	            		<h2>Hi there</h2>
						<div className="firstMove">
							<p>Looks like you are new. Lets create your show.</p>
							<Link to="/curate">Click here to start curating</Link>
						</div>
					</div>
				</div>
                <div className="row text-center">
                	<div className="col-lg-12 col-md-12">
                        <ChannelTable channels={this.props.channels} />
                	</div>
                </div>
	        </section>
        )
    }
})

export default Home