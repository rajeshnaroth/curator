import { INITIALIZED_CHANNEL_DETAILS } from '../actions'

const initialState = {}
const channelDetails = (state = initialState, action) => {
  switch (action.type) {

    case INITIALIZED_CHANNEL_DETAILS:  
      console.log("channelDetails.js: ", action, Object.keys(action.result));
      if (!action.result) {
        return initialState
      }

      const channelsWithFilms = Object.keys(action.result)
        .filter(key => action.result[key].playlists && action.result[key].playlists.length)
        .filter(key => action.result[key].playlists[0].films && action.result[key].playlists[0].films.length)
                  
      return channelsWithFilms.length ?  action.result :initialState;

    default:
      return state;
  }
};
export default channelDetails