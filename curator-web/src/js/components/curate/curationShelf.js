import React from 'react'
import TextField from '../form/textField'
import CurationRack from './curationRack'

import { newId } from '../../utils'
let keyId = newId('curacks-');

const CurationShelf = React.createClass({
    propTypes: {
        channel:React.PropTypes.string.isRequired,
        addFilmToPlaylist:React.PropTypes.func.isRequired,
        deletePlaylist:React.PropTypes.func.isRequired,
        deleteFilmFromCurateList:React.PropTypes.func.isRequired,
        makeCurrentTarget:React.PropTypes.func.isRequired
    },
    addNewList: (comp) => (ev) => { comp.props.addNewList(comp.newListName) },
    render() {
        return (
            <section>
                <div className="shelf">
                    {
                        this.props.curationList.playlists.map(item => {
                            return (
                                <CurationRack key={keyId()} 
                                    currentTarget={this.props.curationList.currentTarget} 
                                    channel={this.props.channel}
                                    rack={item} 
                                    addFilmToPlaylist={this.props.addFilmToPlaylist}
                                    deletePlaylist={this.props.deletePlaylist}
                                    movePlayListUpInCurateList={this.props.movePlayListUpInCurateList}
                                    movePlayListDownInCurateList={this.props.movePlayListDownInCurateList}
                                    moveFilmUpInCurateList={this.props.moveFilmUpInCurateList}
                                    moveFilmDownInCurateList={this.props.moveFilmDownInCurateList}
                                    deleteFilmFromCurateList={this.props.deleteFilmFromCurateList}
                                    makeCurrentTarget={this.props.makeCurrentTarget}
                                    savePlaylistTitle={this.props.savePlaylistTitle}
                                />
                            )
                        })
                    }
                </div>
                <div>
                    <label for="newPlaylist">Add New Category: </label>
                    <TextField size="11" name="newListName" onEnter={(val) => this.props.addNewList(val)} />
                </div>
            </section>)
    }
})
export default CurationShelf
//                    <button onClick={this.addNewList(this)}>Add</button>
