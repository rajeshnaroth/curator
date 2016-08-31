import { INITIALIZED_CHANNELS } from '../actions'
import { saveFlixToDB } from '../api/persistence'

const initialState = ['default']
const channels = (state = initialState, action) => {
  switch (action.type) {

    case INITIALIZED_CHANNELS:    
      return action.result.length === 0 ? initialState : action.result;

    default:
      return state;
  }
};
export default channels