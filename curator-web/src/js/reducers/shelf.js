import {GET_FRESH_LIST_SUCCESS } from '../actions'
const initialState = []
const shelf = (state = initialState, action) => {
  console.log("shelf.js: default ", action, state);
  switch (action.type) {

    case GET_FRESH_LIST_SUCCESS:              
      return action.result;

    default:
      return state;
  }
};
export default shelf