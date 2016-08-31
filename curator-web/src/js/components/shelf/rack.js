import React from 'react'
import FilmCover from './film-cover'
const COVERWIDTH = 320;

const Rack = React.createClass({
    totalFilms:0,
    currentFirst:0,
    windowWidth:1024,
    noOfFilmsInView:3,
    tryRight(current) {
                console.log("rack.js: r current", current);

        if (this.totalFilms <= this.noOfFilmsInView) return current;
        let pos = Math.abs(current - this.noOfFilmsInView)
        return pos >= this.totalFilms - this.noOfFilmsInView ? -1 * (this.totalFilms - this.noOfFilmsInView) : current - this.noOfFilmsInView;
    },
    tryLeft(current) {
        console.log("rack.js: left current", current, (current <= 0 ? 0 : current + this.noOfFilmsInView));
        let pos = current     
        return current >= 0 ? 0 : (current + this.noOfFilmsInView > 0 ? 0 : current + this.noOfFilmsInView);
    },
    moveLeft() {
        this.currentFirst = this.tryLeft(this.currentFirst);
        console.log("rack.js: ml");
                
        this.setState({
            rackWindowStyle: {left: this.currentFirst * COVERWIDTH}
        })
    },
    moveRight() {
        this.currentFirst = this.tryRight(this.currentFirst);
        console.log("rack.js: mr");
                
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
    computeNoOfFilmsInView() {
        this.noOfFilmsInView = parseInt((window.innerWidth * 5/6 - 72) / 320) || 1;
    },
    handleResize: function(e) {
        this.computeNoOfFilmsInView()
        console.log("rack.js: ", window.innerWidth, this.noOfFilmsInView);
    },
    componentDidMount: function() {
        this.windowWidth = window.innerWidth;
        this.computeNoOfFilmsInView()
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
                    <div className="rackControl" style={{visibility: (this.tryLeft(this.currentFirst) === this.currentFirst ? "hidden" : "visible")}}>
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
                    <div className="rackControl" style={{visibility: (this.tryRight(this.currentFirst) === this.currentFirst ? "hidden" : "visible")}}>
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