import { SHOW_FILM_BUBBLE, HIDE_FILM_BUBBLE } from '../actions'

const initialState = { visibility:'hidden', videoId:null}

const shelf = (state = initialState, action) => {
    
    switch (action.type) {

        case SHOW_FILM_BUBBLE: 
        return { visibility:'visible', videoId:action.id};

        case HIDE_FILM_BUBBLE: 
        return initialState;

        default:
        return state
    }
};
export default shelf