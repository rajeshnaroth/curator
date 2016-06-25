import React from 'react'
import Logo from './logo'

const Header = React.createClass({
    render: function() {
        return <div><Logo/><h3>Curator Web App</h3></div>
    }
})

export default Header