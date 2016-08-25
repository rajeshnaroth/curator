import React from 'react'
import FilmCover from './film-cover'
const COVERWIDTH = 320;
const NFILMS_IN_VIEW = 3;

const Rack = React.createClass({
    totalFilms:0,
    currentFirst:0,
    right(current) {
        if (this.totalFilms <= NFILMS_IN_VIEW) return current;
        let pos = Math.abs(current - NFILMS_IN_VIEW)
        return pos >= this.totalFilms - NFILMS_IN_VIEW ? -1 * (this.totalFilms - NFILMS_IN_VIEW) : current - NFILMS_IN_VIEW;
    },
    left(current) {
        return current <= 0 ? 0 : current + NFILMS_IN_VIEW;
    },
    moveLeft() {
        this.currentFirst = this.left(this.currentFirst);
        this.setState({
            rackWindowStyle: {left: this.currentFirst * COVERWIDTH}
        })
    },
    moveRight() {
        this.currentFirst = this.right(this.currentFirst);
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
    handleResize: function(e) {
        console.log("rack.js: ", window.innerWidth);
    },
    componentDidMount: function() {
        window.addEventListener('resize', this.handleResize);
    },
    componentWillUnmount: function() {
        window.removeEventListener('resize', this.handleResize);
    },
    render() {
        let cover = this.props.rack.films.map(film => <FilmCover key={film.id} {...film} />);
        this.totalFilms = this.props.rack.films.length
        return (
            <div className="rack">
                <h2 className="rackLabel">{this.props.rack.genre}</h2>
                <div className="rackSpace">
                    <div className="rackControl" style={{visibility: (this.left(this.currentFirst) === this.currentFirst ? "hidden" : "visible")}}>
                        <a className="rackButton" role="button">
                            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true" onClick={() => this.moveLeft()}></span>
                            <span className="sr-only">Previous</span>
                        </a>
                    </div>
                    <div className="rackWindow">
                        <ul style={this.state.rackWindowStyle}>
                            <li className="filmstrip"><div className="spocks"></div></li>
                            {cover}
                            <li className="filmstrip"><div className="spocks"></div></li>
                        </ul>
                    </div>
                    <div className="rackControl" style={{visibility: (this.right(this.currentFirst) === this.currentFirst ? "hidden" : "visible")}}>
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