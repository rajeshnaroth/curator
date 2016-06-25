import React from 'react'
import Header from './frame/header'
import Footer from './frame/footer'
import Shelf from './shelf/shelf'
//https://www.youtube.com/watch?v=TFHafo91dJg&index=4&list=PLMoRXD9aFQeoWJ5Ad8ZPeHPP1LEfuqMPl

var shelf =  [
    {
        genre:'Drama',
        films:[
            {id: 'AejUBPX2Qe0', title:'Flame', rating:4, views:2000, description:'Love calls. Will you answer?'},
            {id: 'gGYXSRD56wE', title:'Click', rating:3, views:200, description:'That\'s all it takes'},
            {id:'7oJUOsgoplQ', title:'Max', rating:5, views:65429, description:'Some decisions are tough'}
        ]
    },
    {
        genre:'Thriller',
        films:[
            {id: 'XfSdf_nV77o', title:'Status Change', rating:4, views:2000, description:'Vanessa becker makes an important staus change'},
            {id: 'TFHafo91dJg', title:'Mom for Sale', rating:3, views:200, description:'Jacob buys a mom from craigslist'}
        ]
    }

];
const App = React.createClass({
    render: function() {
        return(
        <div>
            <div>
                <Header></Header>
                <Footer></Footer>
            </div>
            <div>
                <Shelf shelf={shelf} />
            </div>
        </div>
        )
    }
})

export default App