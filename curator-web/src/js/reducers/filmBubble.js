import { SHOW_FILM_BUBBLE, HIDE_FILM_BUBBLE } from '../actions'

const initialState = { visibility:'hidden', film:null}

const filmBubble = (state = initialState, action) => {
        console.log("reducer-filmbubble.js: default ", action);

    switch (action.type) {

        case SHOW_FILM_BUBBLE: 
        	return { visibility:'visible', film:action.film};

        case HIDE_FILM_BUBBLE: 
        	return initialState;

        default:
        	return state
    }
};
export default filmBubble