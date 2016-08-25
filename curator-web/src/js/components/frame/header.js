import React from 'react'
import Logo from './logo'
import { Link } from 'react-router'

const Header = () => (
    <nav className="navbar navbar-default navbar-fixed-top">
        <h1>Tube2Flix</h1>
        <ul className="mainNav">
        	<li> <span>Curate</span> </li>
        	<li> <span>Test</span> </li>
		</ul> 
    </nav>
)
export default Header