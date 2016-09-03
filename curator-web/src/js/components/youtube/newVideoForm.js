import React from 'react'
import TextField from '../form/textField'
import FilmDetails from '../common/filmDetails'

const NewVideoForm = (props) => (
	<div>
		<div className="videoIdForm">
			<label for="newVideoId">Video Id: </label>
			<TextField size="11" name="newVideoId" onEnter={(val) => this.props.getVideo(val)} />
		</div>
		<div>
			<FilmDetails {...props.newVideo} />
		</div>
	</div>
)

export default NewVideoForm;