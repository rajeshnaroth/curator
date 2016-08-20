import { fetchVideosFromUser, parseVideoData } from '../api'

export const GET_FRESH_LIST  = 'GET_FRESH_LIST';
export const GET_FRESH_LIST_SUCCESS  = 'GET_FRESH_LIST_SUCCESS';
export const SAVE_PLIST = 'SAVE_PLIST';
export const UPDATE_PLIST = 'UPDATE_PLIST';

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
	console.log("action/index.js: ", 'getPlaylist');
	        
	return (dispatch) => {
		return fetchVideos(playlistId, dispatch)
	}
}

