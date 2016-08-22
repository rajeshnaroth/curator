import { fetchVideosFromUser, parseVideoData } from '../api'

export const GET_FRESH_LIST  = 'GET_FRESH_LIST';
export const GET_FRESH_LIST_SUCCESS  = 'GET_FRESH_LIST_SUCCESS';
export const SAVE_PLIST = 'SAVE_PLIST';
export const UPDATE_PLIST = 'UPDATE_PLIST';
export const OPEN_PLAYER = 'OPEN_PLAYER'
export const CLOSE_PLAYER = 'CLOSE_PLAYER'
export const START_PLAY = 'START_PLAY'

const fetchVideos = (userId, dispatch) => (
		fetchVideosFromUser(userId).then(playlistData => {
				dispatch({type: GET_FRESH_LIST_SUCCESS, result: parseVideoData(playlistData)})
		})
	)

export const getFreshList = () => {	        
	return (dispatch) => {
		return fetchVideos('rnaroth', dispatch)
	}
}

export const getPlaylist = (playlistId) => {
	return (dispatch) => {
		return fetchVideos(playlistId, dispatch)
	}
}

// Player

export const openPlayer = (videoId, dispatch) => {
	return dispatch({type: OPEN_PLAYER, player: {videoId:videoId}})
}

export const closePlayer = (dispatch) => {  
	return dispatch({type: CLOSE_PLAYER, player: {}})
}

export const startPlay = (videoId, dispatch) => {
	return dispatch({type: START_PLAY, player: {videoId:videoId}})
}