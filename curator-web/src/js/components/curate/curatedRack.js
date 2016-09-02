import React from 'react'
let highLightStyle = {borderWidth:1, borderColor:'green', borderStyle:'solid'}
let normalStyle = {borderWidth:1, borderColor:'black', borderStyle:'solid'}
import { newId } from '../../utils'
let keyId = newId('filmr-');
const CuratedRack = React.createClass({
    getInitialState() {
        return {
            currentStyle: normalStyle
        }
    },
    dragOver(ev){
        ev.preventDefault()
        this.setState({currentStyle:highLightStyle})
    },
    dropFilm: (playlist, comp) => (ev) => {
        ev.preventDefault();
        let droppedFilm = JSON.parse(ev.dataTransfer.getData("film"))
        console.log(comp)
        comp.setState({currentStyle:normalStyle})
        comp.props.addFilmToPlaylist(playlist, droppedFilm)
    },
    deletePlaylist: (playlist, comp) => () => {
        comp.props.deletePlaylist(playlist)
    },
    deleteFilm: (playlist, film, comp) => () => {
        console.log("curatedRack.js: deleteFilm", playlist, film.id);
                
        comp.props.deleteFilmFromCurateList(playlist, film)
    },
    render() {
        let filmlist = this.props.rack.films.map((film, i) => (
            <li key={'filmr-'+ i}>
            <span>{film.title}</span> 
            <span className="fakeLink" onClick={this.deleteFilm(this.props.rack, film, this)}> X </span></li>
            ))
        return (
            <div className="curatorPlaylist" style={this.state.currentStyle} onDragOver={this.dragOver} onDrop={this.dropFilm(this.props.rack, this)}>
                {
                    <div>
                        <h3><span className="fakeLink" onClick={this.deletePlaylist(this.props.rack, this)}> X </span><span>{this.props.rack.genre}</span></h3>
                        <ul>{filmlist}</ul>
                    </div>
                }
            </div>
        )
    }
})
export default CuratedRack