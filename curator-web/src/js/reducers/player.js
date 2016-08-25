import { OPEN_PLAYER, CLOSE_PLAYER } from '../actions'

const initialState = { visibility:'hidden', videoId:null}

const shelf = (state = initialState, action) => {
    
    console.log("player.js reducer: ", action);             
    switch (action.type) {

        case OPEN_PLAYER: 
        return { visibility:'visible', videoId:action.player.videoId};

        case CLOSE_PLAYER: 
        return initialState;

        default:
        return state
    }
};
export default shelf