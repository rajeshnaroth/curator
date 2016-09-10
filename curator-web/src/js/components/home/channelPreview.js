import React from 'react'
import { flatten, pipeP } from 'ramda'
import { cancellableTimeoutPromise } from '../../utils'

const ChannelPreview = React.createClass({
	allSlides:[],
	propTypes: {
		playlists:React.PropTypes.array.isRequired,
	},
	getInitialState() {
		return {
			title:'',
			backgroundImage:'none',
			opacity:0,
			backgroundSize: '100%',
			bgSizeTransition: 'background-size 0s',
			letterSpacing:'1px',
			letterSpacingTransition: 'letter-spacing 0s'
		}
	},
	componentWillUnmount(){
		this.allSlides.map(slide => slide.cancel())
	},
	componentWillMount() {
		let slides = this.props.playlists.map((p) => {
			let imageSlides = p.films.map(f => [
				(this.resetEffects()), 
				(this.changeTitleText(f.title)), 
				(this.changeBgImage(f.id)),
				(this.fadeIn()),

				(this.delay(4000 + Math.random() * 2000)),
				(this.fadeOut()),
				(this.delay(1000))
			])
			
			return [...imageSlides]
		})
		this.allSlides = flatten(slides)
		// remove the last three so that the slide stays on.
		this.allSlides.pop()
		this.allSlides.pop()
		this.allSlides.pop()
		// Yeah pop pop pop!!
		
		console.log("channelPreview.js: ", this.allSlides);
		                        
		if (slides.length > 0) {
			pipeP(...(this.allSlides.map(s => s.promise)))()
		}
	},
	delay(sec) {
		return cancellableTimeoutPromise(() => { }, sec)
	},
	fadeOut() {
		return cancellableTimeoutPromise(() => { this.setState({opacity:0}) }, 10)
	},
	fadeIn() {
		return cancellableTimeoutPromise(() => { this.setState({opacity:1}) }, 10)
	},
	changeTitleText(text){ 
		return cancellableTimeoutPromise(() => { this.setState({
			title:text,
			letterSpacing:'0.25em',
			letterSpacingTransition:'letter-spacing 12s'
		}) }, 10)
	},
	resetEffects(videoId){ 
		return cancellableTimeoutPromise(() => { this.setState({
			backgroundSize: '100%',
			bgSizeTransition: 'background-size 0s',
			letterSpacingTransition:'letter-spacing 0s',
			letterSpacing:'0px'
		}) }, 10)
	},
	changeBgImage(videoId){ 
		return cancellableTimeoutPromise(() => { this.setState({
			bgSizeTransition: 'background-size 12s',
			backgroundImage: 'url(https://i.ytimg.com/vi/' + videoId + '/hqdefault.jpg)',
			backgroundSize: '150%'
		}) }, 10)
	},
	render() {
		return (
			<p style={{
				transition:'opacity 1s,' + this.state.bgSizeTransition + ',' + this.state.letterSpacingTransition, 
				transitionTimingFunction: 'linear',
				opacity:this.state.opacity,
				backgroundImage:this.state.backgroundImage,
				backgroundSize:this.state.backgroundSize,
				letterSpacing:this.state.letterSpacing
			}}>{this.state.title}</p>
		)
	}
})

export default ChannelPreview