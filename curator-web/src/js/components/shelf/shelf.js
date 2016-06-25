import React from 'react'
import FilmCover from './film-cover'

var Shelf = (props) => {
    return (
        <div>
            {
                props.shelf.map(item => {
                    let cover = item.films.map(film => <FilmCover key={film.id} {...film} />);
                    return (
                        <div key={item.genre}>
                            <h2>{item.genre}</h2>
                            {cover}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Shelf;