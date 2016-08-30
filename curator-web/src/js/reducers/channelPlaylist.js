import { INITIALIZED_CHANNEL_PLAY_LIST } from '../actions'

const initialState = []
const curationList = (state = initialState, action) => {
  switch (action.type) {

    case INITIALIZED_CHANNEL_PLAY_LIST:
      return action.result;

    default:
      return state;
  }
};
export default curationList