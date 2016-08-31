import { 
    INITIALIZED_CURATION_LIST, 
    SAVE_FLIX, 
    ADD_PLAYLIST_TO_CURATION_LIST, 
    ADD_FILM_TO_CURATION_LIST, 
    DELETE_PLAYLIST_FROM_CURATION_LIST,
    DELETE_FILM_FROM_CURATION_LIST 
} from '../actions'

const initialState = []

const curationList = (state = initialState, action) => {
    
    switch (action.type) {
        case INITIALIZED_CURATION_LIST:
            return action.result;

        case ADD_PLAYLIST_TO_CURATION_LIST:
            console.log("red/curationList.js: ---->", action);
            return [action.playlist, ...state];

        case DELETE_PLAYLIST_FROM_CURATION_LIST: {
            let newList = Array.from(state);
            console.log("curationList.js DELETE_PLAYLIST_FROM_CURATION_LIST: ", action);
                    
            return newList.filter(pl => pl.playlistId !== action.playlist.playlistId) ;
        }    
        case DELETE_FILM_FROM_CURATION_LIST: {
            let newList = Array.from(state);
            newList.map(pl => {
                if (pl.playlistId === action.playlist.playlistId) {
                    pl.films = pl.films.filter(f => f.id !== action.film.id)
                }
                return pl
            })
            return newList;
        }    
        case ADD_FILM_TO_CURATION_LIST: {
            let newList = Array.from(state);
            newList.map(pl => {
                if (pl.playlistId === action.playlist.playlistId) {
                    pl.films.push(action.film)
                }
                return pl
            })
            return newList;
        }

        case SAVE_FLIX:  
            return state;

        default:
            return state;
    }
};
export default curationList