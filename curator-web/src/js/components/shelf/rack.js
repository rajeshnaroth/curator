import React from 'react'
import FilmCover from './film-cover'
const COVERWIDTH = 320;
const NFILMS_IN_VIEW = 3;

const Rack = React.createClass({
    totalFilms:0,
    currentFirst:0,
    right(current) {
        let pos = Math.abs(current - 1)
        return pos >= this.totalFilms - NFILMS_IN_VIEW ? -1 * (this.totalFilms - NFILMS_IN_VIEW) : current - 1;
    },
    left(current) {
        return current === 0 ? 0 : current + 1;
    },
    moveLeft() {
        this.currentFirst = this.left(this.currentFirst);
        console.log("rack.js: L ", this.currentFirst); 
                
        this.setState({
            rackWindowStyle: {left: this.currentFirst * COVERWIDTH}
        })
    },
    moveRight() {
        this.currentFirst = this.right(this.currentFirst);
        console.log("rack.js: R ", this.currentFirst);
                
        this.setState({
            rackWindowStyle: {left: this.currentFirst * COVERWIDTH}
        })
    },
    getInitialState() {
        return {
            currentItemIndex: 0,
            rackWindowStyle: {
                left:0
            }
        }
    },
    render() {
        let cover = this.props.rack.films.map(film => <FilmCover openPlayer={this.props.openPlayer} key={film.id} {...film} />);
        this.totalFilms = this.props.rack.films.length
        return (
            <div className="rack">
                <h2 className="rackLabel">{this.props.rack.genre}</h2>
                <div className="rackSpace">
                    <div className="rackControl">
                        <a className="rackButton" role="button">
                            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true" onClick={() => this.moveLeft()}></span>
                            <span className="sr-only">Previous</span>
                        </a>
                    </div>
                    <div className="rackWindow">
                        <ul style={this.state.rackWindowStyle}>
                            {cover}
                        </ul>
                    </div>
                    <div className="rackControl">
                        <a className="rackButton" role="button">
                            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true" onClick={() => this.moveRight()}></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        )
    }    
})

export default Rack