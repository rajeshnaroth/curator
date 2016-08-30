import { fetchPlaylistFromUser, parseVideoData } from '../api/youtube'
import { saveFlixToDB, getFlixFromDB } from '../api/persistence'

export const INITIALIZED_SHOW_LIST  = 'INITIALIZED_SHOW_LIST'

export const INITIALIZED_CURATION_LIST = 'INITIALIZED_CURATION_LIST'
export const SAVED_CURATION_LIST  = 'SAVED_CURATION_LIST'

export const INITIALIZED_CHANNEL_PLAY_LIST = 'INITIALIZED_CHANNEL_PLAY_LIST'

export const ADD_PLAYLIST_TO_CURATION_LIST = 'ADD_PLAYLIST_TO_CURATION_LIST'
export const DELETE_PLAYLIST_FROM_CURATION_LIST = 'DELETE_PLAYLIST_FROM_CURATION_LIST'
export const ADD_FILM_TO_CURATION_LIST     = 'ADD_FILM_TO_CURATION_LIST'

export const OPEN_PLAYER = 'OPEN_PLAYER'
export const CLOSE_PLAYER = 'CLOSE_PLAYER'

export const START_PLAY = 'START_PLAY'

// Curator

export const getListFromDBForCuration = () => {	        
	return (dispatch) => {
		return getFlixFromDB().then(playlistData => {
				dispatch({type: INITIALIZED_CURATION_LIST, result: playlistData})
		}).catch((err) => console.log(err))
	}
}

export const saveCuratedListToDB = (flixlist) => {	        
	return (dispatch) => {
		return saveFlixToDB(flixlist).then(playlistData => {
				dispatch({type: SAVED_CURATION_LIST, result: playlistData})
		}).catch((err) => console.log(err))
	}
}

export const deletePlaylist = (playlist, dispatch) => {
	return (dispatch) => {
		return dispatch({type: DELETE_PLAYLIST_FROM_CURATION_LIST, playlist: playlist})
	}
}

// Show / Shelf
export const fetchShowListFromDB = () => {
	return (dispatch) => {
		return getFlixFromDB().then(playlistData => {
				dispatch({type: INITIALIZED_SHOW_LIST, result: playlistData})
		}).catch((err) => console.log(err))
	}
}

export const fetchVideosFromYouTube = (userId) => {	        
	return (dispatch) => {
		return fetchPlaylistFromUser(userId).then(playlistData => {
				dispatch({type: INITIALIZED_CHANNEL_PLAY_LIST, result: parseVideoData(playlistData)})
		}).catch((err) => console.log(err))
	}
}

// Playlist

export const addPlaylistToCurationList = (playlist, dispatch) => {
	console.log("action.js: ---> ", 'addPlaylistToCurationList');
	return (dispatch) => {
		return dispatch({type: ADD_PLAYLIST_TO_CURATION_LIST, playlist: playlist})
	}
}

export const addFilmToPlaylist = (playlist, film, dispatch) => {
	return dispatch({type: ADD_FILM_TO_CURATION_LIST, playlist: playlist, film:film})
}

// Player

export const openPlayer = (videoId, dispatch) => {
	return dispatch({type: OPEN_PLAYER, player: { videoId:videoId }})
}

export const triggerOpenPlayer = (videoId) => {
	return (dispatch) => {
		return openPlayer(videoId, dispatch)
	}
}



// Player


export const closePlayer = (dispatch) => {  
	return dispatch({type: CLOSE_PLAYER, player: {}})
}

export const startPlay = (videoId, dispatch) => {
	return dispatch({type: START_PLAY, player: { videoId:videoId }})
}

