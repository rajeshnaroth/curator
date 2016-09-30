import { fetchVideoDetails } from '../api/youtube'

export const FETCHED_VIDEO_DETAILS = 'FETCHED_VIDEO_DETAILS'
export const SHOW_FILM_BUBBLE = 'SHOW_FILM_BUBBLE'
export const HIDE_FILM_BUBBLE = 'HIDE_FILM_BUBBLE'

export const getVideoDetails = (videoId) => {
	return (dispatch) => {
		return fetchVideoDetails(videoId).then(videoData => {
			console.log("actions/index.js: ", videoData);
			        
				dispatch({type: FETCHED_VIDEO_DETAILS, result: videoData})
		}).catch((err) => console.log(err))
	}
}

export const showFilmBubble = (film) => (dispatch) => dispatch({type: SHOW_FILM_BUBBLE, film:film})

export const hideFilmBubble = (film) => (dispatch) => dispatch({type: HIDE_FILM_BUBBLE, film:film})
