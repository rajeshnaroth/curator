import { fetchPlaylistFromChannelByNameOrId, fetchSingleVideoAsFakePlaylist } from '../api/youtube'

export const INITIALIZED_CHANNEL_PLAY_LIST = 'INITIALIZED_CHANNEL_PLAY_LIST'

export const fetchPlaylistsFromYouTube = (channelNameOrChannelIdOrUserId) => {	        
	return (dispatch) => {
		return fetchPlaylistFromChannelByNameOrId(channelNameOrChannelIdOrUserId)
			.then(playlistData => {
					dispatch({type: INITIALIZED_CHANNEL_PLAY_LIST, result: playlistData})
			})
			.catch((err) => {
				console.log('failed to get video by channel name or channel id', err)
				fetchSingleVideoAsFakePlaylist(channelNameOrChannelIdOrUserId)
					.then(playlistData => {
							dispatch({type: INITIALIZED_CHANNEL_PLAY_LIST, result: playlistData})
					})
					.catch((err) => {
						console.log('failed to get video by id', err)
					})
			})
	}
}
