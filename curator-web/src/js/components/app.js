import React from 'react'
import Header from './frame/header'
import Footer from './frame/footer'

const App = React.createClass({
    render: function() {
        return <div>
                <Header></Header>
                <Footer></Footer>
            </div>
    }
})

export default App