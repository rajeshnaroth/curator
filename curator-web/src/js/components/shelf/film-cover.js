import React from 'react'
import { curry } from 'ramda'
import Title from './title'
import Ratings from './ratings'
import Views from './views'
import Description from './description'
import { Link } from 'react-router'

// <figure><img src={'https://i.ytimg.com/vi/' + props.id + '/hqdefault.jpg'}/></figure>

const FilmCover = React.createClass({
	render() {
		return (
			<li className="filmCover" >
			<Link to={'/player/' + this.props.id}>
				<figure><img src={'https://i.ytimg.com/vi/' + this.props.id + '/mqdefault.jpg'}/></figure>
			</Link>
			<Title text={this.props.title} />
			</li>
			)
	}
})
export default FilmCover