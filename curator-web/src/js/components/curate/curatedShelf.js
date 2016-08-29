import React from 'react'
import CuratedRack from './curatedRack'

const CuratedShelf = React.createClass({
    render() {
        console.log("shelf.js...: ", this.props.shelf);
                
        return (
            <div>
                <div className="shelf">
                    {
                        this.props.curationList.default.map(item => {
                            return (
                                <CuratedRack key={item.genre} rack={item} />
                            )
                        })
                    }
                </div>
            </div>)
    }
})
export default CuratedShelf