import React from 'react'

import Rack from './rack'

import { newId } from '../../utils'
let keyId = newId('rack-');

const Shelf = React.createClass({
    render() {
        console.log("shelf.js...: ", this.props.shelf, this.props.channels);
                
        return (
            <div className="row">
                <div className="col-lg-12 col-md-12">
                    <div className="shelf">
                        {
                            this.props.shelf.playlists.map(item => {
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