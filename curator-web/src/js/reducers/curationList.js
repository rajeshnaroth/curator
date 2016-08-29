import { INITIALIZED_CURATION_LIST, SAVE_FLIX } from '../actions'

const initialState = { default: [] }
const curationList = (state = initialState, action) => {
  console.log("reducer-curate.js: default ", action, state);
  switch (action.type) {

    case INITIALIZED_CURATION_LIST:
      return action.result;

    case SAVE_FLIX:  
      return state;

    default:
      return state;
  }
};
export default curationList