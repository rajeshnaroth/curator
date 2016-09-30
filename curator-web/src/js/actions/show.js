import { getChannelFromDB } from '../api/persistence'

export const INITIALIZED_SHOW_LIST  = 'INITIALIZED_SHOW_LIST'

export const fetchShowListFromDB = (channel) => {
	return (dispatch) => {
		return getChannelFromDB(channel).then(playlistData => {
				dispatch({type: INITIALIZED_SHOW_LIST, result: playlistData})
		}).catch((err) => console.log(err))
	}
}
