import { fetchVideosFromUser, parseVideoData } from '../api/youtube'
import { saveFlixToDB, getFlixFromDB } from '../api/persistence'

export const GET_FRESH_LIST  = 'GET_FRESH_LIST';
export const GET_FRESH_LIST_SUCCESS  = 'GET_FRESH_LIST_SUCCESS';

export const LOAD_FROM_DB  = 'LOAD_FROM_DB';
export const LOADED_FROM_DB  = 'LOADED_FROM_DB';


export const SAVE_PLIST = 'SAVE_PLIST';
export const UPDATE_PLIST = 'UPDATE_PLIST';
export const OPEN_PLAYER = 'OPEN_PLAYER'
export const CLOSE_PLAYER = 'CLOSE_PLAYER'
export const START_PLAY = 'START_PLAY'
export const SAVE_FLIX = 'SAVE_FLIX'
export const GET_FLIX = 'GET_FLIX'



const fetchVideosFromDB = (userId, dispatch) => (
		getFlixFromDB().then(playlistData => {
				dispatch({type: LOADED_FROM_DB, result: playlistData})
		})
	)

export const getListFromDB = () => {	        
	return (dispatch) => {
		return fetchVideosFromDB('rnaroth', dispatch)
	}
}

const fetchVideosFromYouTube = (userId, dispatch) => (
		fetchVideosFromUser(userId).then(playlistData => {
				dispatch({type: GET_FRESH_LIST_SUCCESS, result: parseVideoData(playlistData)})
		})
	)

export const getFreshList = () => {	        
	return (dispatch) => {
		return fetchVideosFromYouTube('rnaroth', dispatch)
	}
}

export const getPlaylist = (playlistId) => {
	return (dispatch) => {
		return fetchVideosFromYouTube(playlistId, dispatch)
	}
}

export const triggerOpenPlayer = (videoId) => {
	return (dispatch) => {
		return openPlayer(videoId, dispatch)
	}
}

// Player

export const openPlayer = (videoId, dispatch) => {
	return dispatch({type: OPEN_PLAYER, player: { videoId:videoId }})
}

export const closePlayer = (dispatch) => {  
	return dispatch({type: CLOSE_PLAYER, player: {}})
}

export const startPlay = (videoId, dispatch) => {
	return dispatch({type: START_PLAY, player: { videoId:videoId }})
}

//Persistence

export const saveFlix = (flixlist) => (dispatch) => (
	saveFlixToDB(flixlist).then(response => dispatch({ type: SAVE_FLIX, flixlist:response }))
)


export const getFlix = () => (dispatch) =>  (
	getFlixFromDB().then(response => dispatch({ type: GET_FLIX, flixlist:response }))
)
