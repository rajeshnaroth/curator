import React from 'react'
import TextField from '../form/textField'
import FilmDetails from '../common/filmDetails'
import Title from '../common/title'

const NewVideoForm = React.createClass({
	copyFilmToCuration(props) {
        return () => {
            console.log("newvideoform----->: ", 'copyFilmToCuration:', props.newVideo);
            props.copyFilmToCuration(props.newVideo)
        }     
    },
	render(){
		return(
			<section>
				<div className="videoIdForm">
					<label for="newVideoId">Video Id: </label>
					<TextField size="11" name="newVideoId" onEnter={(val) => this.props.getVideo(val)} />
				</div>
				<div>
				<ul style={{display:this.props.newVideo.id ? 'block' : 'none'}}>
					<li key={'newVideo1'}>
		                <span className="glyphicon glyphicon-chevron-left" onClick={this.copyFilmToCuration(this.props)}></span>
		                <span>{this.props.newVideo.title} </span>
		            </li>
		         </ul>
				</div>
			</section>
		)
	}
})

export default NewVideoForm;