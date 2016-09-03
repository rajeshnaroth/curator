import { 
    INITIALIZED_CURATION_LIST, 
    SAVED_CURATION_LIST, 
    SAVE_FLIX, 
    ADD_PLAYLIST_TO_CURATION_LIST, 
    ADD_FILM_TO_CURATION_LIST, 
    ADD_NEW_EMPTY_PLAYLIST,
    DELETE_PLAYLIST_FROM_CURATION_LIST,
    DELETE_FILM_FROM_CURATION_LIST 
} from '../actions'

const customPlaylistId = () => Math.floor((Math.random() * 1000000) + 100)

const initialState = []

const curationList = (state = initialState, action) => {
    
    switch (action.type) {
        case INITIALIZED_CURATION_LIST:
        case SAVED_CURATION_LIST:
            console.log("curationList.js: INITIALIZED/SAVED_CURATION_LIST", action.result);
            return action.result;

        case ADD_PLAYLIST_TO_CURATION_LIST:
            return [action.playlist, ...state];

        case DELETE_PLAYLIST_FROM_CURATION_LIST: {
            let newList = Array.from(state);
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
            let newList = Array.from(state)
            newList.map(pl => {
                if (pl.playlistId === action.playlist.playlistId) {
                    pl.films.push(action.film)
                }
                return pl
            })
            return newList;
        }
        case ADD_NEW_EMPTY_PLAYLIST: {
            let newlist = Array.from(state)
            newlist.push({
                genre: action.playlistName,
                playlistId: customPlaylistId(),
                films:[]
            })
            return newlist
        }
        case SAVE_FLIX:  
            return state;

        default:
            return state;
    }
};
export default curationList