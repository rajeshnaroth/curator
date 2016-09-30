import React from 'react'
import { flatten, pipeP } from 'ramda'
import { cancellableTimeoutPromise } from '../../utils'
import Sequencer from './sequencer'

const ChannelPreview = React.createClass({
	propTypes: {
		playlists:React.PropTypes.array.isRequired,
	},
	getInitialState() {
		return {
			title:'',
			style: {
			}
		}
	},
	componentWillMount() {
		const modifiedStyle = (currentStyles, newStyles) => ({style: Object.assign({}, currentStyles, newStyles) })//shortcut

		this.sequence = Sequencer.create()
		// Now add functions to be sequenced to sequence.
		// Any function can be added.
		// To create a wait call the wait function with milliseconds arg
		this.props.playlists.forEach(p => {
			p.films.forEach(f => {

				//randomness will help slides not to be in sync
				
				this.sequence.wait(Math.random() * 2000)
				// reset properties.    
				this.sequence.carryOut(
					() => {
						        
						this.setState(modifiedStyle(this.state.style, {
							transition:'opacity 1s, background-size 0s, letter-spacing 0s',
						}))
					}
				)
				this.sequence.wait(200)
				this.sequence.carryOut(
					() => {
						console.log("channelPreview.js: ", this.state.style, modifiedStyle(this.state.style, {
							letterSpacing:'0px',
							backgroundSize: '100%',
							opacity:0
						}));
						this.setState(modifiedStyle(this.state.style, {
							letterSpacing:'0px',
							backgroundSize: '100%',
							opacity:0
						}))
					}
				)

				// text, bg and opacity=1
				this.sequence.carryOut(
					() => {
						this.setState(modifiedStyle(this.state.style, { // change slide text and bg
							transition:'opacity 1s, background-size 10s, letter-spacing 10s',
						}))
					}
				)
				this.sequence.wait(200)
				this.sequence.carryOut(
					() => {
						this.setState(modifiedStyle(this.state.style, { // change slide text and bg
							transition:'opacity 1s, background-size 10s, letter-spacing 10s',
							letterSpacing:'0.21em',
							backgroundSize: '148%',
							backgroundImage: 'url(https://i.ytimg.com/vi/' + f.id + '/hqdefault.jpg)',
							opacity:1
						}))
						this.setState({title:f.title})
					}
				)
				
				// Set a delay so that the transitions can work its magic in the time
				// The random factor will allow slides not to be synced up all the time.
				this.sequence.wait(4000 + Math.random() * 2000)

				// fade out
				this.sequence.carryOut( () => this.setState(modifiedStyle(this.state.style, { 
					opacity:0 
				})) )
				// set 1s wait for opacity to go to 0
				this.sequence.wait(1000)
			})
		})
		// remove the last three so that the slide stays on.
		this.sequence.popLast()
		this.sequence.popLast()
		this.sequence.popLast()

		// start
		this.sequence.start()
	},
	componentWillUnmount(){
		this.sequence.cancel()
	},
	render() {
		return (
			<p style={this.state.style}>{this.state.title}</p>
		)
	}
})

export default ChannelPreview