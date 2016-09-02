import { INITIALIZED_CHANNELS, ADD_CHANNEL } from '../actions'
import { saveFlixToDB } from '../api/persistence'

const initialState = ['default']
const channels = (state = initialState, action) => {
  switch (action.type) {

    case INITIALIZED_CHANNELS:    
      return action.result.length === 0 ? initialState : action.result;

	case ADD_CHANNEL:    
      return action.result.length === 0 ? initialState : action.result.newChannelList;

    default:
      return state;
  }
};
export default channels