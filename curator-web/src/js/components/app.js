import React from 'react'
import Header from './frame/header'
import Footer from './frame/footer'
import Shelf from './shelf/shelf'

require('../../scss/app.scss') // Tells webpack to include this.

var shelf =  [
    {
        genre:'Drama',
        films:[
            {id: 'AejUBPX2Qe0', title:'Flame', rating:4, views:2000, description:'Love calls. Will you answer?'},
            {id: 'gGYXSRD56wE', title:'Click', rating:3, views:200, description:'That\'s all it takes'},
            {id: '7oJUOsgoplQ', title:'Max', rating:5, views:65429, description:'Some decisions are tough'},
            {id: 'XfSdf_nV77o', title:'Status Change', rating:4, views:2000, description:'Vanessa becker makes an important staus change'},
            {id: 'TFHafo91dJg', title:'Mom for Sale', rating:3, views:200, description:'Jacob buys a mom from craigslist'},
            {id: 'ul9m4oZkeU4', title:'Heatwave', rating:3, views:200, description:'Sally is having a bad day'}
        ]
    },
    {
        genre:'Other',
        films:[
            {id: 'XfSdf_nV77o', title:'Status Change', rating:4, views:2000, description:'Vanessa becker makes an important staus change'},
            {id: 'TFHafo91dJg', title:'Mom for Sale', rating:3, views:200, description:'Jacob buys a mom from craigslist'}
        ]
    }
];

const App = React.createClass({
    render: function() {
        console.log(Header);
        return(
            <div>
                <Header />
                <Shelf shelf={shelf} />
                <Footer />
            </div>
        )
    }
})

export default App