import React from 'react'
import Rack from './rack'

const Shelf = React.createClass({
    saveFlix() {
        this.props.saveFlix(this.props.shelf)
    },
    render() {
        return (
            <div>
                <button onClick={this.saveFlix}>Save</button>
            <div className="shelf">
                {
                    this.props.shelf.map(item => {
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