import React from 'react'

import Rack from './rack'
import Channels from '../common/channels'

import { newId } from '../../utils'
let keyId = newId('rack-');

const Shelf = React.createClass({
    render() {
        console.log("shelf.js...: ", this.props.shelf, this.props.channels);
                
        return (
            <div className="row">
                <div className="col-lg-2 col-md-2">
                    <Channels channels={this.props.channels} linkDestination="/show" />
                </div>
                <div className="col-lg-10 col-md-10">
                    <div className="shelf">
                        {
                            this.props.shelf.map(item => {
                                return (
                                    <Rack key={keyId()} rack={item} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>)
    }
})
export default Shelf