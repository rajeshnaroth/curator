import React from 'react'
import FilmCover from './film-cover'

const Rack = ({rack}) => {
    let cover = rack.films.map(film => <FilmCover key={film.id} {...film} />);
    return (
        <div className="rack">
            <h2 className="rackLabel">{rack.genre}</h2>
            <div className="rackSpace">
                <div className="rackControl">
                    <a className="rackButton" href="#" role="button">
                        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                </div>
                <div className="rackWindow">
                    <ul>
                        {cover}
                    </ul>
                </div>
                <div className="rackControl">
                    <a className="rackButton" href="#" role="button">
                        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Rack