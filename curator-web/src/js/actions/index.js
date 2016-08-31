import { fetchPlaylistFromUser, parseVideoData, fetchVideoDetails } from '../api/youtube'
import { saveFlixToDB, getFlixFromDB, getChannelsFromDB, deleteChannelAndSaveToDB } from '../api/persistence'

export const INITIALIZED_SHOW_LIST  = 'INITIALIZED_SHOW_LIST'

export const INITIALIZED_CURATION_LIST = 'INITIALIZED_CURATION_LIST'
export const SAVED_CURATION_LIST  = 'SAVED_CURATION_LIST'

export const INITIALIZED_CHANNEL_PLAY_LIST = 'INITIALIZED_CHANNEL_PLAY_LIST'
export const INITIALIZED_CHANNELS = 'INITIALIZED_CHANNELS'
export const DELETE_CHANNEL = 'DELETE_CHANNEL'

export const ADD_PLAYLIST_TO_CURATION_LIST = 'ADD_PLAYLIST_TO_CURATION_LIST'
export const DELETE_PLAYLIST_FROM_CURATION_LIST = 'DELETE_PLAYLIST_FROM_CURATION_LIST'
export const DELETE_FILM_FROM_CURATION_LIST = 'DELETE_FILM_FROM_CURATION_LIST'
export const ADD_FILM_TO_CURATION_LIST     = 'ADD_FILM_TO_CURATION_LIST'

export const OPEN_PLAYER = 'OPEN_PLAYER'
export const CLOSE_PLAYER = 'CLOSE_PLAYER'

export const FETCHED_VIDEO_DETAILS = 'FETCHED_VIDEO_DETAILS'
export const SHOW_FILM_BUBBLE = 'SHOW_FILM_BUBBLE'
export const HIDE_FILM_BUBBLE = 'HIDE_FILM_BUBBLE'

export const START_PLAY = 'START_PLAY'

// Channel
export const fetchChannelsFromDB = () => (dispatch) => {
	return getChannelsFromDB().then(channels => {
			dispatch({type: INITIALIZED_CHANNELS, result: channels})
	}).catch((err) => console.log(err))
}

export const deleteChannel = (channel) => (dispatch) => {
	return deleteChannelAndSaveToDB(channel).then(channels => {
			dispatch({type: INITIALIZED_CHANNELS, result: channels})
	}).catch((err) => console.log(err))
}

// Curator

export const getListFromDBForCuration = (channel) => {	        
	return (dispatch) => {
		return getFlixFromDB(channel).then(playlistData => {
				dispatch({type: INITIALIZED_CURATION_LIST, result: playlistData || []})
		}).catch((err) => console.log(err))
	}
}

export const saveCuratedListToDB = (channel, flixlist) => {	        
	return (dispatch) => {
		return saveFlixToDB(channel, flixlist).then(playlistData => {
				dispatch({type: SAVED_CURATION_LIST, result: playlistData})
		}).catch((err) => console.log(err))
	}
}

export const deletePlaylist = (playlist) => {
	return (dispatch) => {
		return dispatch({type: DELETE_PLAYLIST_FROM_CURATION_LIST, playlist: playlist})
	}
}

export const deleteFilmFromCurateList = (playlist, film) => {
	return (dispatch) => {
		return dispatch({type: DELETE_FILM_FROM_CURATION_LIST, playlist: playlist, film:film})
	}
}

// Show / Shelf
export const fetchShowListFromDB = (channel) => {
	return (dispatch) => {
		return getFlixFromDB(channel).then(playlistData => {
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

export const addPlaylistToCurationList = (playlist) => (dispatch) => dispatch({type: ADD_PLAYLIST_TO_CURATION_LIST, playlist: playlist})

export const addFilmToPlaylist = (playlist, film) =>  (dispatch) =>  dispatch({type: ADD_FILM_TO_CURATION_LIST, playlist: playlist, film:film})

// Player
export const triggerOpenPlayer = (videoId) => (dispatch) =>  dispatch({type: OPEN_PLAYER, player: { videoId:videoId }})

// FilmBubble

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
