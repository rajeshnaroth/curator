import { INITIALIZED_CHANNEL_DETAILS } from '../actions'
import {customPlaylistId} from '../utils'

const initialState = {
	"default": {
        details:{title:''},
        playlists: []
    }
}
const channelDetails = (state = initialState, action) => {
  switch (action.type) {

    case INITIALIZED_CHANNEL_DETAILS:    
      return action.result.length === 0 ? initialState : action.result;

    default:
      return state;
  }
};
export default channelDetails