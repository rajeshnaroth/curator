import React from 'react'
import CuratedRack from './curatedRack'

import { newId } from '../../utils'
let keyId = newId('curack-');

const CuratedShelf = React.createClass({
    render() {
        let addFilmToPlaylist = this.props.addFilmToPlaylist;        
        return (
            <div>
                <div className="shelf">
                    {
                        this.props.curationList.map(item => {
                            return (
                                <CuratedRack key={keyId()} 
                                    rack={item} 
                                    addFilmToPlaylist={this.props.addFilmToPlaylist}
                                    deletePlaylist={this.props.deletePlaylist}
                                    deleteFilmFromCurateList={this.props.deleteFilmFromCurateList}
                                />
                            )
                        })
                    }
                </div>
            </div>)
    }
})
export default CuratedShelf