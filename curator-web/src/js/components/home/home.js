import React from 'react'
import { Link } from 'react-router'
import ChannelTable from './channelTable'
import NewUserPanel from './newUserPanel'

const Home = React.createClass({
    propTypes: {
        
    },
	render() {
        let content = ''
        if (!this.props.channelDetails['default']) {
            content = <NewUserPanel />
        } else {
            content = <div className="row">
                <div className="col-lg-3 col-md-3"></div>
                <div className="col-lg-6 col-md-6">
                    <ChannelTable channelDetails={this.props.channelDetails} />
                </div>
                <div className="col-lg-3 col-md-3"></div>
            </div>
        }
        return (           
            <section className="center-block">{content}</section>
        )
    }
})

export default Home