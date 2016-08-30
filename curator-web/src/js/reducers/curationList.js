import { 
    INITIALIZED_CURATION_LIST, 
    SAVE_FLIX, 
    ADD_PLAYLIST_TO_CURATION_LIST, 
    ADD_FILM_TO_CURATION_LIST, 
    DELETE_PLAYLIST_FROM_CURATION_LIST } from '../actions'

const initialState = { default: [] }

const curationList = (state = initialState, action) => {
    console.log("reducer-curate.js: default ", action, state);
    switch (action.type) {
        case INITIALIZED_CURATION_LIST:
            return action.result;

        case ADD_PLAYLIST_TO_CURATION_LIST:
            console.log("red/curationList.js: ---->", action);
            return { default: [action.playlist, ...state.default] };

        case DELETE_PLAYLIST_FROM_CURATION_LIST: {
            let newList = Array.from(state.default);
            console.log("curationList.js DELETE_PLAYLIST_FROM_CURATION_LIST: ", action);
                    
            return { default: newList.filter(pl => pl.playlistId !== action.playlist.playlistId) };
        }    
        case ADD_FILM_TO_CURATION_LIST: {
            let newList = Array.from(state.default);
            newList.map(pl => {
                if (pl.playlistId === action.playlist.playlistId) {
                    pl.films.push(action.film)
                }
                return pl
            })
            return { default: newList };
        }

        case SAVE_FLIX:  
            return state;

        default:
            return state;
    }
};
export default curationList