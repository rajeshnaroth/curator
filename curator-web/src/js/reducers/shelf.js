import { INITIALIZED_SHOW_LIST } from '../actions'

const initialState = { "default":[] }
const shelf = (state = initialState, action) => {
  switch (action.type) {

    case INITIALIZED_SHOW_LIST:    
      return action.result;

    default:
      return state;
  }
};
export default shelf