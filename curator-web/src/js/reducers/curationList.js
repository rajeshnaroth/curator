import { head, findIndex, propEq } from 'ramda'
import { 
    INITIALIZED_CURATION_LIST, 
    SAVED_CURATION_LIST, 
    SAVE_FLIX, 
    SET_TARGET_PLAYLIST, 
    ADD_PLAYLIST_TO_CURATION_LIST, 
    ADD_FILM_TO_CURATION_LIST, 
    ADD_NEW_EMPTY_PLAYLIST,
    DELETE_PLAYLIST_FROM_CURATION_LIST,
    MOVE_PLAYLIST_UP_IN_CURATION_LIST,
    MOVE_PLAYLIST_DOWN_IN_CURATION_LIST,
    DELETE_FILM_FROM_CURATION_LIST 
} from '../actions'

const customPlaylistId = () => Math.floor((Math.random() * 1000000) + 100)

const initialState = {
    currentTarget:'',
    details:{
        title:'Untitled',
    },
    playlists:[]
}

const curationList = (state = initialState, action) => {
    console.log("curationList.js: ", action, state);
            
    switch (action.type) {
        case INITIALIZED_CURATION_LIST:
        case SAVED_CURATION_LIST: {
            if (!action.result) {
                return initialState;
            }
            let first = head(action.result.playlists)

            if (first) {
                action.result.currentTarget = first.playlistId
            }
            console.log("curationList.js: INITIALIZED/SAVED_CURATION_LIST", action.result);
            return Object.assign({}, action.result);
        }
        case SET_TARGET_PLAYLIST: {
            let retVal = Object.assign({}, state)
            retVal.currentTarget = action.playlist.playlistId
            return retVal
        }
        case ADD_PLAYLIST_TO_CURATION_LIST: {
            let retVal = Object.assign({}, state)
            retVal.playlists = [action.playlist, ...state.playlists]
            return retVal;
        }
        case ADD_FILM_TO_CURATION_LIST: {
            let retVal = Object.assign({}, state)
            retVal.playlists = Array.from(state.playlists)
            retVal.playlists.map(pl => {
                if (pl.playlistId === action.curationList.currentTarget) {
                    pl.films.push(action.film)
                }
                return pl
            })
            return retVal;
        }
        case DELETE_PLAYLIST_FROM_CURATION_LIST: {
            let retVal = Object.assign({}, state)
            let newList = Array.from(state.playlists)
            retVal.playlists = newList.filter(pl => pl.playlistId !== action.playlist.playlistId) ;
            return retVal;
        }    
        case DELETE_FILM_FROM_CURATION_LIST: {
            let retVal = Object.assign({}, state)
            retVal.playlists = Array.from(state.playlists);
            retVal.playlists.map(pl => {
                if (pl.playlistId === action.playlist.playlistId) {
                    pl.films = pl.films.filter(f => f.id !== action.film.id)
                }
                return pl
            })
            return retVal;
        }    
        case MOVE_PLAYLIST_UP_IN_CURATION_LIST: {
            let retVal = Object.assign({}, state)
            retVal.playlists = Array.from(state.playlists);
            let currentIndex = findIndex(propEq('playlistId', action.playlist.playlistId))(retVal.playlists)
            console.log("curationList.js: ", currentIndex);
                    
            if (currentIndex > 0) {
                let temp = retVal.playlists[currentIndex - 1]
                retVal.playlists[currentIndex - 1] = retVal.playlists[currentIndex] 
                retVal.playlists[currentIndex] = temp
            }
            return retVal;
        }    
        case MOVE_PLAYLIST_DOWN_IN_CURATION_LIST: {
            let retVal = Object.assign({}, state)
            retVal.playlists = Array.from(state.playlists);
            let currentIndex = findIndex(propEq('playlistId', action.playlist.playlistId))(retVal.playlists)
            console.log("curationList.js: ", currentIndex);
                    
            if (currentIndex < retVal.playlists.length - 1) {
                let temp = retVal.playlists[currentIndex + 1]
                retVal.playlists[currentIndex + 1] = retVal.playlists[currentIndex] 
                retVal.playlists[currentIndex] = temp
            }
            return retVal;
        }    
        case ADD_NEW_EMPTY_PLAYLIST: {
            let retVal = Object.assign({}, state)
            retVal.playlists = Array.from(state.playlists)
            retVal.playlists.push({
                genre: action.playlistName,
                playlistId: customPlaylistId(),
                films:[]
            })
            return retVal
        }
        case SAVE_FLIX:  
            return state;

        default:
            return state;
    }
};
export default curationList