import { INITIALIZED_SHOW_LIST } from '../actions'

const initialState = {
    details:{
        title:'default',
    },
    playlists:[]
}
const shelf = (state = initialState, action) => {
  switch (action.type) {

    case INITIALIZED_SHOW_LIST:    
        if (!action.result) {
            return initialState;
        }
        return action.result;
    default:
      return state;
  }
};
export default shelf