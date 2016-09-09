import React from 'react'
import { flatten, pipeP } from 'ramda'

const ChannelPreview = React.createClass({
	propTypes: {
		playlists:React.PropTypes.array.isRequired,
	},
	getInitialState() {
		return {
			title:'',
			backgroundImage:'none',
			opacity:0
		}
	},
	componentWillMount() {
		let slides = this.props.playlists.map((p) => {
			let textFade = [
				this.changeTextAfter(p.genre, 1), 
				this.fadeInAfter(1), 
				this.fadeOutAfter(5)
			]
			let imageSlides = p.films.map(f => [
				this.changeTextAfter(f.title, 0.1), 
				this.changeBgAfter(f.id, 1),
				this.fadeInAfter(1), 
				this.fadeOutAfter(3)
			])
			// return [...textFade, this.changeTextAfter('', 1), this.fadeInAfter(1), ...imageSlides]
			return [...imageSlides]
		})
		let allSlides = flatten(slides)
		console.log("channelPreview.js: ", flatten(slides));
		        
		if (slides.length > 0) {
			pipeP(...allSlides)()
		}
	},
	fadeOutAfter(sec) { 
		return (
			() => new Promise((resolve, reject) => {
														setTimeout(() => { 
															console.log('opacity:0 aft ', sec)
															this.setState({opacity:0})
															resolve('')
														}, sec * 1000)
													})
		)
	},
	fadeInAfter(sec) {
		return (
			() => new Promise((resolve, reject) => {
														setTimeout(() => { 
															console.log('opacity:1 aft ', sec)
															this.setState({opacity:1})
															resolve('')
														}, sec * 1000)
													})
		)
	},
	changeTextAfter(text, sec){ 
		return (
			() => new Promise((resolve, reject) => {
														setTimeout(() => { 
															console.log(text,  'aft ', sec)
															this.setState({title:text})
															resolve(text)
														}, sec * 1000)
													})
		)
	},
	changeBgAfter(id, sec){ 
		return (
			() => new Promise((resolve, reject) => {
														setTimeout(() => { 
															console.log('url(https://i.ytimg.com/vi/' + id + '/default.jpg)',  'aft ', sec)
															this.setState({backgroundImage:'url(https://i.ytimg.com/vi/' + id + '/hqdefault.jpg)'})
															resolve('')
														}, sec * 1000)
													})
		)
	},
	render() {
		return (
			<p style={{
				transition:'opacity 1s', 
				opacity:this.state.opacity,
				backgroundImage:this.state.backgroundImage
			}}>{this.state.title}</p>
		)
	}
})

export default ChannelPreview