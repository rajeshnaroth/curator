import React from 'react'
import TextField from '../form/textField'
import CuratedRack from './curatedRack'

import { newId } from '../../utils'
let keyId = newId('curack-');

const CuratedShelf = React.createClass({
    addNewList: (comp) => (ev) => { comp.props.addNewList(comp.newListName) },
    render() {
        return (
            <div>
                <div className="shelf">
                    {
                        this.props.curationList.playlists.map(item => {
                            return (
                                <CuratedRack key={keyId()} 
                                    channel={this.props.channel}
                                    rack={item} 
                                    addFilmToPlaylist={this.props.addFilmToPlaylist}
                                    deletePlaylist={this.props.deletePlaylist}
                                    deleteFilmFromCurateList={this.props.deleteFilmFromCurateList}
                                />
                            )
                        })
                    }
                </div>
                <div>
                    <label for="newPlaylist">Add New List: </label>
                    <TextField size="11" name="newListName" onEnter={(val) => this.props.addNewList(val)} />
                </div>
            </div>)
    }
})
export default CuratedShelf
//                    <button onClick={this.addNewList(this)}>Add</button>
