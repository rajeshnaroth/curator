import React from 'react'
import Logo from './logo'
import GoogleLogin from './googleLogin'
import { Link } from 'react-router'

const Header = () => (
    <nav className="navbar navbar-default navbar-fixed-top">
        <GoogleLogin />
        <Link to='/'><h1>Tube2Flix</h1></Link>
        <ul className="mainNav">
        	<li><Link to='/show'><span>Show</span></Link></li>
        	<li><Link to='/curate'><span>Curate</span></Link></li>
        	<li><Link to='/test'><span>Test</span></Link></li>
		</ul> 
    </nav>
)
export default Header