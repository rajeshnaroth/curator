import React from 'react'
import { curry } from 'ramda'
import Title from '../common/title'
import Ratings from '../common/ratings'
import Views from '../common/views'
import Description from '../common/description'
import { Link } from 'react-router'

// <figure><img src={'https://i.ytimg.com/vi/' + props.id + '/hqdefault.jpg'}/></figure>

const FilmCover = React.createClass({
	render() {
		console.log("film-cover.js: ", this.props)
		return (
			<li className="filmCover" >
			<Link to={'/player/' + this.props.id}>
				<figure><img src={'https://i.ytimg.com/vi/' + this.props.id + '/mqdefault.jpg'}/></figure>
			</Link>
			<Title text={this.props.title || ''} />
			</li>
			)
	}
})
export default FilmCover