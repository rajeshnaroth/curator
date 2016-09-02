import { FETCHED_NEW_VIDEO } from '../actions'

const initialState = {
	id:'',
    title:'',
    description:'',
    rating:0,
    views:0
}

const filmDetails = (state = initialState, action) => {
    switch (action.type) {

        case FETCHED_NEW_VIDEO: 
        	return action.result || initialState;

        default:
        	return state
    }
};
export default filmDetails
