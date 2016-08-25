import { LOADED_FROM_DB } from '../actions'

const initialState = []
const shelf = (state = initialState, action) => {
  console.log("shelf.js: default ", action, state);
  switch (action.type) {

    case LOADED_FROM_DB:              
      return action.result;

    default:
      return state;
  }
};
export default shelf