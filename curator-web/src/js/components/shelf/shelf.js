import React from 'react'
import Rack from './rack'

const Shelf = (props) => {
    return (<div className="shelf">
            {
            	        
                props.shelf.map(item => {
                    return (
                        <Rack key={item.genre} rack={item} />
                    )
                })
            }
        </div>)
}
export default Shelf