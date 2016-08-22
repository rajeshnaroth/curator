import React from 'react'
import { curry } from 'ramda'
import Title from './title'
import Ratings from './ratings'
import Views from './views'
import Description from './description'

// <figure><img src={'https://i.ytimg.com/vi/' + props.id + '/hqdefault.jpg'}/></figure>

const FilmCover = React.createClass({
	render() {
		function curriedOpenPlayer(props) {			        
			return function() { props.openPlayer(props.id) }
		}
		
		return (
			<div className="filmCover" onClick={curriedOpenPlayer(this.props)} >
			    <li>
			        <figure><img src={'https://i.ytimg.com/vi/' + this.props.id + '/mqdefault.jpg'}/></figure>
			        <Title text={this.props.title} />
			    </li>
		    </div>
		)
	}
})
export default FilmCover