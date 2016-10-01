import React from 'react'
import { Link } from 'react-router'

const Header = () => (
    <nav className="navbar navbar-default navbar-fixed-top">
        <section className="userMenu">
        	<li><Link to='/curate'><span>Curate</span></Link></li>
        </section>
        <Link to='/'><h1>Tube2Flix</h1></Link>
    </nav>
)
export default Header