import React from 'react'
// Make sure you include <script src="https://apis.google.com/js/platform.js" async defer></script>
// in your main html page
// This component refers gapi global
const GoogleLogin = React.createClass({

	onSignIn(googleUser) {
		  var profile = googleUser.getBasicProfile();
		  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
		  console.log('Name: ' + profile.getName());
		  console.log('Image URL: ' + profile.getImageUrl());
		  console.log('Email: ' + profile.getEmail());
	},
	signOut() {
		    var auth2 = gapi.auth2.getAuthInstance();
		    auth2.signOut().then(function () {
		      console.log('User signed out.');
		    });
  	},
  	componentDidMount() {
  		if (typeof gapi !== 'undefined') {
  			console.log(gapi.auth2)
  		} else {
  			console.log("googleLogin.js: gapi not defined");
  			        
  		}
  	},
	render() {
		return (
			<div className="googleLogin">
				<div className="g-signin2" data-onsuccess={this.onSignIn}></div>
				<a href="#" onclick={this.signOut}>Sign out</a>
			</div>
		)
	}
})

export default GoogleLogin
