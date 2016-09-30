import React from 'react'
import _throttle from 'lodash/throttle'

import { newId } from '../../utils'

let keyId = newId('pl-');

const Playlist = React.createClass({
    bubbleTimeout: 0,
    bubbleIsOut: false,
    copyPlaylistToCuration(props) {
        return () => {
            console.log("playlist.js----->: ", 'copyPlaylistToCuration:', props.playlist);
            props.copyPlaylistToCuration(props.playlist)
        }     
    },
    copyFilmToCuration(props, film) {
        return () => {
            console.log("playlist.js----->: ", 'copyFilmToCuration:', film);
            props.copyFilmToCuration(film)
        }     
    },
    startDrag: (film) => (ev) => {
        console.log('startDrag setting', film);
        ev.dataTransfer.setData("film", JSON.stringify(film))
    },
    endDrag(ev) {

    },
    mouseOver: (film, comp) => (ev) => {
        if (comp.bubbleTimeout || comp.bubbleIsOut) { 
            return 
        }
        comp.bubbleTimeout = setTimeout(() => {
            console.log("playlist.js: mouseOver, show bubble")
            comp.bubbleTimeout = 0
            comp.bubbleIsOut = true
            comp.props.showFilmBubble(film)
        }, 300)
    },
    mouseOut: (film, comp) => (ev) => {
        if (comp.bubbleTimeout) {
            console.log("playlist.js: mouseOut. clear timeout")
            clearTimeout(comp.bubbleTimeout)
            comp.bubbleTimeout = 0
        }
        if (comp.bubbleIsOut) {
            console.log("playlist.js: mouseOut. close bubble")
            comp.bubbleIsOut = false
            comp.props.hideFilmBubble(film)
        }
    },
    render() {
        let filmlist = this.props.playlist.films.map(film => (
            <li draggable="true"
                onDragStart={this.startDrag(film)}
                onDragEnd={this.endDrag}
                key={keyId()}>
                <span className="glyphicon glyphicon-chevron-left" onClick={this.copyFilmToCuration(this.props, film)}></span>
                <span onMouseOver={_throttle(this.mouseOver(film, this), 2000)} onMouseOut={this.mouseOut(film)}>{film.title}</span>
            </li>
        ))
        return (
            <div className="curatorPlaylist">
                {
                    <div>
                        <h3>
                            <span className="glyphicon glyphicon-chevron-left" onClick={this.copyPlaylistToCuration(this.props)}></span>
                            <span>{this.props.playlist.genre}</span>
                        </h3>
                        <ul>{filmlist}</ul>
                    </div>
                }
            </div>
        )
    }
})
export default Playlist