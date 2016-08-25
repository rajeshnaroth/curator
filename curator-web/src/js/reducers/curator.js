import { GET_FRESH_LIST_SUCCESS, SAVE_FLIX, GET_FLIX } from '../actions'

const initialState = []
const shelf = (state = initialState, action) => {
  console.log("reducer-curate.js: default ", action, state);
  switch (action.type) {

    case GET_FRESH_LIST_SUCCESS:             
      return action.result;

    case SAVE_FLIX:  
      return state;

    default:
      return state;
  }
};
export default shelf