import { INITIALIZED_CHANNEL_PLAY_LIST } from '../actions'

const initialState = []
const curationList = (state = initialState, action) => {
  console.log("reducer-curate.js: default ", action, state);
  switch (action.type) {

    case INITIALIZED_CHANNEL_PLAY_LIST:
      return action.result;

    default:
      return state;
  }
};
export default curationList