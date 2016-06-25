import React from 'react'
import Title from './title'
import Ratings from './ratings'
import Views from './views'
import Description from './description'

// <figure><img src={'https://i.ytimg.com/vi/' + props.id + '/hqdefault.jpg'}/></figure>

var FilmCover = (props) => {
    return (
        <div>
            <figure><img src={'https://i.ytimg.com/vi/' + props.id + '/mqdefault.jpg'}/></figure>
            <Title text={props.title} />
            <Ratings value={props.rating} />
            <Views value={props.views} />
        </div>
    )
}

export default FilmCover;