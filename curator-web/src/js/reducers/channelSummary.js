import { INITIALIZED_CHANNEL_SUMMARY, ADD_CHANNEL, DELETE_CHANNEL } from '../actions'

const initialState = [{id:'default', title:'default'}]
const channelSummary = (state = initialState, action) => {
  switch (action.type) {

    case INITIALIZED_CHANNEL_SUMMARY:    
      return action.result.length === 0 ? initialState : action.result;

	case ADD_CHANNEL:    
      return action.result.length === 0 ? initialState : action.result.newChannelList;

	case DELETE_CHANNEL:    
      return action.result.length === 0 ? initialState : action.result.newChannelList;

    default:
      return state;
  }
};
export default channelSummary