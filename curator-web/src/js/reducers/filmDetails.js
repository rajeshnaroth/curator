import { FETCHED_VIDEO_DETAILS } from '../actions'

const initialState = {
	id:'',
    title:'',
    description:'',
    rating:0,
    views:0
}

const filmDetails = (state = initialState, action) => {
    //console.log("reducer-filmdetails.js: default ", action, state);
    switch (action.type) {

        case FETCHED_VIDEO_DETAILS: 
        	return action.result || initialState;

        default:
        	return state
    }
};
export default filmDetails
