import React from 'react'

const Playlist = React.createClass({
    saveFlix() {
        this.props.saveFlix(this.props.curator)
    },
    render() {
        let filmlist = this.props.playlist.films.map(film => <li key={'k_' + film.id}>{film.title}</li>);
        return (
            <div className="curatorPlaylist">
                {
                    <div>
                        <h3>{this.props.playlist.genre}</h3>
                        <ul>{filmlist}</ul>
                    </div>
                }
            </div>
        )
    }
})
export default Playlist