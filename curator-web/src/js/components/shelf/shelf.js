import React from 'react'
import Rack from './rack'
import { newId } from '../../utils'
let keyId = newId('rack-');
const Shelf = React.createClass({
    render() {
        console.log("shelf.js...: ", this.props.shelf);
                
        return (
            <div>
                <div className="shelf">
                    {
                        this.props.shelf.default.map(item => {
                            return (
                                <Rack key={keyId()} rack={item} />
                            )
                        })
                    }
                </div>
            </div>)
    }
})
export default Shelf