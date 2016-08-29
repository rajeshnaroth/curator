import React from 'react'
import Rack from './rack'

const Shelf = React.createClass({
    render() {
        console.log("shelf.js...: ", this.props.shelf);
                
        return (
            <div>
                <div className="shelf">
                    {
                        this.props.shelf.default.map(item => {
                            return (
                                <Rack key={item.genre} rack={item} />
                            )
                        })
                    }
                </div>
            </div>)
    }
})
export default Shelf