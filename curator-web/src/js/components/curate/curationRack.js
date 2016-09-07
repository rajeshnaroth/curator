import React from 'react'
let highLightStyle = {borderWidth:1, borderColor:'green', borderStyle:'solid'}
let normalStyle = {borderWidth:1, borderColor:'#444444', borderStyle:'solid'}
let targetStyleHighlight = {backgroundColor:'#666666'}
let targetStyleNone = {backgroundColor:'none'}

import { newId } from '../../utils'
let keyId = newId('filmr-');
const CurationRack = React.createClass({
    getInitialState() {
        return {
            currentStyle: normalStyle,
        }
    },
    currentTargetStyle(playlistId) {                
        return (playlistId === this.props.currentTarget ? targetStyleHighlight : targetStyleNone)
    },
    dragOver(ev){
        ev.preventDefault()
        this.setState({currentStyle:highLightStyle})
    },
    dragLeave(ev){
        ev.preventDefault()
        this.setState({currentStyle:normalStyle})
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
    movePlaylistUp: (playlist, comp) => () => {
        comp.props.movePlayListUpInCurateList(playlist)
    },
    movePlaylistDown: (playlist, comp) => () => {
        comp.props.movePlayListDownInCurateList(playlist)
    },
    deleteFilm: (playlist, film, comp) => () => {
        comp.props.deleteFilmFromCurateList(comp.props.channel, playlist, film)
    },
    makeCurrentTarget: (playlist, comp) => () => {
        comp.props.makeCurrentTarget(playlist)
    },
    render() {
        console.log("curationRack.js: render");
                
        let filmlist = this.props.rack.films.map((film, i) => (
            <li key={'filmr-'+ i}>
                <span>{film.title} </span> 
                <span className="fakeLinkIcon glyphicon glyphicon-trash" onClick={this.deleteFilm(this.props.rack, film, this)}></span>
            </li>
            ))
        return (
            <div className="curatorPlaylist" 
                style={this.state.currentStyle} 
                style={this.currentTargetStyle(this.props.rack.playlistId)} 
                onClick={this.makeCurrentTarget(this.props.rack, this)} 
                onDragOver={this.dragOver} 
                onDragLeave={this.dragLeave} 
                onDrop={this.dropFilm(this.props.rack, this)}>
                {
                    <div>
                        <h3>
                            <span>{this.props.rack.genre}</span> &nbsp;
                            <span className="fakeLinkIcon glyphicon glyphicon-arrow-up" onClick={this.movePlaylistUp(this.props.rack, this)}></span>
                            <span className="fakeLinkIcon glyphicon glyphicon-arrow-down" onClick={this.movePlaylistDown(this.props.rack, this)}></span>
                            <span className="fakeLinkIcon glyphicon glyphicon-trash" onClick={this.deletePlaylist(this.props.rack, this)}></span>
                        </h3>
                        <ul>{filmlist}</ul>
                    </div>
                }
            </div>
        )
    }
})
export default CurationRack