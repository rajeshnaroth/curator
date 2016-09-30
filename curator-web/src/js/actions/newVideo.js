import { fetchVideoDetails } from '../api/youtube'

export const FETCHED_NEW_VIDEO = 'FETCHED_NEW_VIDEO'

// add new video
export const fetchNewVideoFromYouTube = (videoId) => {
	return (dispatch) => {
		return fetchVideoDetails(videoId).then(videoData => {
				dispatch({type: FETCHED_NEW_VIDEO, result: videoData})
		}).catch((err) => console.log(err))
	}
}
