import React from 'react'
import Title from './title'
import Ratings from './ratings'
import Views from './views'
import Description from './description'

var FilmBubble = (props) => {
    return (
        <div>
            <figure><img src={'https://i.ytimg.com/vi/' + props.id + '/hqdefault.jpg'}/></figure>
            <Title text={props.title} />
            <Ratings value={props.rating} />
            <Views value={props.views} />
            <Description value={props.description} />
        </div>
    )
}

export default FilmBubble;