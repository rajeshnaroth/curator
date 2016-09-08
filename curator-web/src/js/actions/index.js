import { fetchPlaylistFromUser, parseVideoData, fetchVideoDetails } from '../api/youtube'
import { 
	saveChannelToDB, 
	getChannelFromDB, 
	getChannelsFromDB, 
	deleteChannelAndSaveToDB, 
	addChannelAndSaveToDB 
} from '../api/persistence'

export const INITIALIZED_SHOW_LIST  = 'INITIALIZED_SHOW_LIST'

export const INITIALIZED_CURATION_LIST = 'INITIALIZED_CURATION_LIST'
export const SAVED_CURATION_LIST  = 'SAVED_CURATION_LIST'

export const INITIALIZED_CHANNEL_PLAY_LIST = 'INITIALIZED_CHANNEL_PLAY_LIST'
export const INITIALIZED_CHANNELS = 'INITIALIZED_CHANNELS'
export const DELETE_CHANNEL = 'DELETE_CHANNEL'
export const ADD_CHANNEL = 'ADD_CHANNEL'

export const SET_TARGET_PLAYLIST = 'SET_TARGET_PLAYLIST'
export const ADD_PLAYLIST_TO_CURATION_LIST = 'ADD_PLAYLIST_TO_CURATION_LIST'
export const DELETE_PLAYLIST_FROM_CURATION_LIST = 'DELETE_PLAYLIST_FROM_CURATION_LIST'
export const MOVE_FILM_UP_IN_CURATION_LIST = 'MOVE_FILM_UP_IN_CURATION_LIST'
export const MOVE_FILM_DOWN_IN_CURATION_LIST = 'MOVE_FILM_DOWN_IN_CURATION_LIST'
export const DELETE_FILM_FROM_CURATION_LIST = 'DELETE_FILM_FROM_CURATION_LIST'
export const ADD_FILM_TO_TARGET_CURATION_LIST = 'ADD_FILM_TO_TARGET_CURATION_LIST'
export const ADD_FILM_TO_PLAYLIST_IN_CURATION_LIST = 'ADD_FILM_TO_PLAYLIST_IN_CURATION_LIST'
export const MOVE_PLAYLIST_UP_IN_CURATION_LIST = 'MOVE_PLAYLIST_UP_IN_CURATION_LIST'
export const MOVE_PLAYLIST_DOWN_IN_CURATION_LIST = 'MOVE_PLAYLIST_DOWN_IN_CURATION_LIST'
export const ADD_NEW_EMPTY_PLAYLIST = 'ADD_NEW_EMPTY_PLAYLIST'
export const CHANGE_PLAYLIST_TITLE_IN_CURATION_LIST = 'CHANGE_PLAYLIST_TITLE_IN_CURATION_LIST'

export const OPEN_PLAYER = 'OPEN_PLAYER'
export const CLOSE_PLAYER = 'CLOSE_PLAYER'

export const FETCHED_VIDEO_DETAILS = 'FETCHED_VIDEO_DETAILS'
export const SHOW_FILM_BUBBLE = 'SHOW_FILM_BUBBLE'
export const HIDE_FILM_BUBBLE = 'HIDE_FILM_BUBBLE'

export const FETCHED_NEW_VIDEO = 'FETCHED_NEW_VIDEO'

export const START_PLAY = 'START_PLAY'

// Channel
export const fetchChannelsFromDB = () => (dispatch) => {
	return getChannelsFromDB().then(channels => {
		console.log("index.js: ", channels);
		        
			dispatch({type: INITIALIZED_CHANNELS, result: channels})
	}).catch((err) => console.log(err))
}

export const addChannel = (channel) => (dispatch) => {
	return addChannelAndSaveToDB(channel).then(channels => {
			dispatch({type: ADD_CHANNEL, result: {newChannel:channel, newChannelList:channels}})
	}).catch((err) => console.log(err))
}

export const deleteChannel = (channel) => (dispatch) => {
	return deleteChannelAndSaveToDB(channel).then(channels => {
			dispatch({type: DELETE_CHANNEL, result: {newChannel:channel, newChannelList:channels}})
	}).catch((err) => console.log(err))
}

// Curator
export const getListFromDBForCuration = (channel) => {	        
	return (dispatch) => {
		return getChannelFromDB(channel).then(playlistData => {
				dispatch({type: INITIALIZED_CURATION_LIST, result: playlistData})
		}).catch((err) => console.log(err))
	}
}

export const deletePlaylist = (channel, playlist) => {
	return (dispatch, getState) => {
		Promise.all([
			dispatch({type: DELETE_PLAYLIST_FROM_CURATION_LIST, playlist: playlist})
		])
		.then(() => { 
			saveChannelToDB(channel, getState().curationList) 
		}).catch((err) => console.log(err))
	}
}

export const movePlayListUpInCurateList = (channel, playlist) => {
	return (dispatch, getState) => {
		Promise.all([
			dispatch({type: MOVE_PLAYLIST_UP_IN_CURATION_LIST, playlist: playlist})
		])
		.then(() => { 
			saveChannelToDB(channel, getState().curationList) 
		}).catch((err) => console.log(err))
	}
}

export const movePlayListDownInCurateList = (channel, playlist) => {
	return (dispatch, getState) => {
		Promise.all([
			dispatch({type: MOVE_PLAYLIST_DOWN_IN_CURATION_LIST, playlist: playlist})
		])
		.then(() => { 
			saveChannelToDB(channel, getState().curationList) 
		}).catch((err) => console.log(err))
	}
}

export const addNewCuratePlaylist = (channel, newlistName) => {	
	return (dispatch, getState) => {
		Promise.all([
			dispatch({type: ADD_NEW_EMPTY_PLAYLIST, playlistName:newlistName})
		])
		.then(() => { 
			saveChannelToDB(channel, getState().curationList) 
		})
		.catch((err) => console.log(err))
	}
}

export const addFilmToPlaylist = (channel, playlist, film) => {
	return (dispatch, getState) => {
		Promise.all([
			dispatch({type: ADD_FILM_TO_PLAYLIST_IN_CURATION_LIST, playlist: playlist, film:film})
		])
		.then(() => { 
			saveChannelToDB(channel, getState().curationList) 
		})
		.catch((err) => console.log(err))
	}
}

export const moveFilmUpInCurateList = (channel, playlist, film) => {
	return (dispatch, getState) => {
		Promise.all([
			dispatch({type: MOVE_FILM_UP_IN_CURATION_LIST, playlist: playlist, film:film})
		])
		.then(() => { 
			saveChannelToDB(channel, getState().curationList) 
		})
		.catch((err) => console.log(err))
	}
}

export const moveFilmDownInCurateList = (channel, playlist, film) => {
	return (dispatch, getState) => {
		Promise.all([
			dispatch({type: MOVE_FILM_DOWN_IN_CURATION_LIST, playlist: playlist, film:film})
		])
		.then(() => { 
			saveChannelToDB(channel, getState().curationList) 
		})
		.catch((err) => console.log(err))
	}
}

export const deleteFilmFromCurateList = (channel, playlist, film) => {
	return (dispatch, getState) => {
		Promise.all([
			dispatch({type: DELETE_FILM_FROM_CURATION_LIST, playlist: playlist, film:film})
		])
		.then(() => { 
			saveChannelToDB(channel, getState().curationList) 
		})
		.catch((err) => console.log(err))
	}
}

export const addPlaylistToCurationList = (channel, playlist) => {
	return (dispatch, getState) => {
		Promise.all([
			dispatch({type: ADD_PLAYLIST_TO_CURATION_LIST, playlist: playlist})
		])
		.then(() => { 
			saveChannelToDB(channel, getState().curationList) 
		})
		.catch((err) => console.log(err))
	}
}

export const addFilmToTargetCurationList = (channel, film) =>  {
	return (dispatch, getState) => {
		Promise.all([
			dispatch({type: ADD_FILM_TO_TARGET_CURATION_LIST, channel:channel, curationList: getState().curationList, film:film})
		])
		.then(() => { 
			saveChannelToDB(channel, getState().curationList) 
		})
		.catch((err) => console.log(err))
	}
}

export const changePlaylistTitle = (channel, playlist, title) =>  {

	return (dispatch, getState) => {
		Promise.all([
			dispatch({type: CHANGE_PLAYLIST_TITLE_IN_CURATION_LIST, playlist: playlist, title:title})
		])
		.then(() => { 
			saveChannelToDB(channel, getState().curationList) 
		})
		.catch((err) => console.log(err))
	}
}

export const setTargetPlayList = (channel, playlist) => (dispatch) => dispatch({type: SET_TARGET_PLAYLIST, playlist: playlist})

// add new video
export const fetchNewVideoFromYouTube = (videoId) => {
	return (dispatch) => {
		return fetchVideoDetails(videoId).then(videoData => {
				dispatch({type: FETCHED_NEW_VIDEO, result: videoData})
		}).catch((err) => console.log(err))
	}
}

// Show / Shelf
export const fetchShowListFromDB = (channel) => {
	return (dispatch) => {
		return getChannelFromDB(channel).then(playlistData => {
				dispatch({type: INITIALIZED_SHOW_LIST, result: playlistData})
		}).catch((err) => console.log(err))
	}
}

export const fetchPlaylistsFromYouTube = (userId) => {	        
	return (dispatch) => {
		return fetchPlaylistFromUser(userId)
			.then(playlistData => {
					dispatch({type: INITIALIZED_CHANNEL_PLAY_LIST, result: parseVideoData(playlistData)})
			})
			.catch((err) => console.log(err))
	}
}


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
