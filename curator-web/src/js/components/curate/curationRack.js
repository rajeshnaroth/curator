import React from 'react'
import EditableText from '../form/editableText'

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
    moveFilmUp: (playlist, film, comp) => (ev) => {
        ev.stopPropagation();       
        comp.props.moveFilmUpInCurateList(playlist, film)
    },
    moveFilmDown: (playlist, film, comp) => (ev) => {
        ev.stopPropagation();       
        comp.props.moveFilmDownInCurateList(playlist, film)
    },
    deleteFilm: (playlist, film, comp) => (ev) => {
        ev.stopPropagation();       
        comp.props.deleteFilmFromCurateList(playlist, film)
    },
    makeCurrentTarget: (playlist, comp) => () => {
        comp.props.makeCurrentTarget(playlist)
    },
    savePlaylistTitle: (playlist, comp) => (title) => {
        console.log("curationRack.js: savePlaylistTitle", playlist, title);
                
        comp.props.savePlaylistTitle(playlist, title)
    },
    render() {
        console.log("curationRack.js: render");
        let filmlist = <p> There are no films added in this category. You can search for channels and add them here </p>        
        if (this.props.rack.films.length) { 
            filmlist = this.props.rack.films.map((film, i) => (
                <li key={'filmr-'+ i}>
                    <span>{film.title} </span>
                    <div className="itemControls">
                        <span className="fakeLinkIcon glyphicon glyphicon-arrow-up" onClick={this.moveFilmUp(this.props.rack, film, this)}></span>
                        <span className="fakeLinkIcon glyphicon glyphicon-arrow-down" onClick={this.moveFilmDown(this.props.rack, film, this)}></span>
                        <span className="fakeLinkIcon glyphicon glyphicon-trash" onClick={this.deleteFilm(this.props.rack, film, this)}></span>
                    </div>
                </li>
            ))
        }
        return (
            <section className="curatorPlaylist" 
                style={this.state.currentStyle} 
                style={this.currentTargetStyle(this.props.rack.playlistId)} 
                onClick={this.makeCurrentTarget(this.props.rack, this)} 
                onDragOver={this.dragOver} 
                onDragLeave={this.dragLeave} 
                onDrop={this.dropFilm(this.props.rack, this)}>
                {
                    <div>
                        <h3>
                            <EditableText 
                                onEnter={this.savePlaylistTitle(this.props.rack, this)}
                                presetValue={this.props.rack.genre} 
                                name={'title-' + this.props.rack.playlistId} />
                            <div className="itemControls">
                                <span className="fakeLinkIcon glyphicon glyphicon-arrow-up" onClick={this.movePlaylistUp(this.props.rack, this)}></span>
                                <span className="fakeLinkIcon glyphicon glyphicon-arrow-down" onClick={this.movePlaylistDown(this.props.rack, this)}></span>
                                <span className="fakeLinkIcon glyphicon glyphicon-trash" onClick={this.deletePlaylist(this.props.rack, this)}></span>
                            </div>
                        </h3>
                        <ul>{filmlist}</ul>
                    </div>
                }
            </section>
        )
    }
})
export default CurationRack