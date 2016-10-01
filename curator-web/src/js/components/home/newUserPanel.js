import React from 'react'
import { Link } from 'react-router'

const NewUserPanel = () => (
	<div className="row">
        <div className="col-lg-12 col-md-12 text-center">
            <h2>Hi there!</h2>
            <div className="firstMove">
                <p>Looks like you are new. Lets create your show.</p>
                <Link to="/curate">Click here to start curating</Link>
            </div>
        </div>
        <div className="col-lg-12 col-md-12">
	    	<h2>What is Tube2Flix</h2>
	    	<p>Tube2Flix let you curate youtube videos and present them in a la-netflix mode.</p>
	    	<h2>How do I do it?</h2>
	    	<p> <Link to="/curate">Go to the curate Page.</Link> There, you can search for youtube videos by a channel
	    		name, channel id or video Id. Whan the video is listed, Click on the 'left caret' to add it to the autocreated genre list.
	    		You can also add whole playlists.
	    	</p>
	    	<h2>Why?</h2>
	    	<p>Why not. :-)</p>
	    </div>
    </div>
    
)

export default NewUserPanel