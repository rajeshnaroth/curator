import React from 'react'
import Title from './title'
import Ratings from './ratings'
import Views from './views'
import Description from './description'

const FilmDetails = ({ id, title, rating, views, description }) => (
	<div className="filmDetails">
	    <figure><img src={'https://i.ytimg.com/vi/' + id + '/default.jpg'}/></figure>
	    <Title text={title} />
	    <Ratings value={rating} />
	    <Views value={views} />
	    <Description text={description} />
	</div>
)
export default FilmDetails