import React from 'react'

const CuratedRack = React.createClass({

    render() {
        let filmlist = this.props.rack.films.map(film => <li key={'ck_' + film.id}>{film.title}</li>);
        return (
            <div className="curatorPlaylist">
                {
                    <div>
                        <h3>{this.props.rack.genre}</h3>
                        <ul>{filmlist}</ul>
                    </div>
                }
            </div>
        )
    }
})
export default CuratedRack