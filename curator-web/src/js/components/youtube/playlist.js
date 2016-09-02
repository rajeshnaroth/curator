import React from 'react'
import _throttle from 'lodash/throttle'

import { newId } from '../../utils'
let keyId = newId('pl-');

const Playlist = React.createClass({
    copyPlaylistToCuration(props) {
        return () => {
            console.log("playlist.js----->: ", 'copyPlaylistToCuration:', props.playlist);
            props.copyPlaylistToCuration(props.playlist)
        }     
    },
    startDrag: (film) => (ev) => {
        console.log('startDrag setting', film);
        ev.dataTransfer.setData("film", JSON.stringify(film));
    },
    endDrag(ev) {

    },
    mouseOver: (film, comp) => (ev) => {
        console.log("playlist.js: mouseOver")
        //comp.props.showFilmBubble(film)
    },
    mouseOut: (film, comp) => (ev) => {
        console.log("playlist.js: mouseOut")
        //comp.props.hideFilmBubble(film)
    },
    render() {
        let filmlist = this.props.playlist.films.map(film => (
            <li draggable="true"
                onDragStart={this.startDrag(film)}
                onDragEnd={this.endDrag}
                key={keyId()}>
                <span onMouseOver={_throttle(this.mouseOver(film, this), 2000)} onMouseOut={this.mouseOut(film, this)}>{film.title}</span>
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