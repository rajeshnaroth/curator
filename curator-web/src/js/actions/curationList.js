import { 
	saveChannelToDB, 
	getChannelFromDB
} from '../api/persistence'

import {
	INITIALIZED_CURATION_LIST,
} from './shared'

export const SET_TARGET_PLAYLIST_IN_CURATION_LIST = 'SET_TARGET_PLAYLIST_IN_CURATION_LIST'
export const ADD_PLAYLIST_TO_CURATION_LIST = 'ADD_PLAYLIST_TO_CURATION_LIST'
export const DELETE_PLAYLIST_FROM_CURATION_LIST = 'DELETE_PLAYLIST_FROM_CURATION_LIST'
export const MOVE_FILM_UP_IN_CURATION_LIST = 'MOVE_FILM_UP_IN_CURATION_LIST'
export const MOVE_FILM_DOWN_IN_CURATION_LIST = 'MOVE_FILM_DOWN_IN_CURATION_LIST'
export const DELETE_FILM_FROM_CURATION_LIST = 'DELETE_FILM_FROM_CURATION_LIST'
export const ADD_FILM_TO_TARGET_CURATION_LIST = 'ADD_FILM_TO_TARGET_CURATION_LIST'
export const ADD_FILM_TO_PLAYLIST_IN_CURATION_LIST = 'ADD_FILM_TO_PLAYLIST_IN_CURATION_LIST'
export const MOVE_PLAYLIST_UP_IN_CURATION_LIST = 'MOVE_PLAYLIST_UP_IN_CURATION_LIST'
export const MOVE_PLAYLIST_DOWN_IN_CURATION_LIST = 'MOVE_PLAYLIST_DOWN_IN_CURATION_LIST'
export const ADD_NEW_EMPTY_PLAYLIST_IN_CURATION_LIST = 'ADD_NEW_EMPTY_PLAYLIST_IN_CURATION_LIST'
export const CHANGE_PLAYLIST_TITLE_IN_CURATION_LIST = 'CHANGE_PLAYLIST_TITLE_IN_CURATION_LIST'

export const UPDATE_CHANNEL_DETAILS_IN_CURATION_LIST = 'UPDATE_CHANNEL_DETAILS_IN_CURATION_LIST'

// Load
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
			dispatch({type: ADD_NEW_EMPTY_PLAYLIST_IN_CURATION_LIST, playlistName:newlistName})
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

export const setTargetPlayList = (channel, playlist) => (dispatch) => dispatch({type: SET_TARGET_PLAYLIST_IN_CURATION_LIST, playlist: playlist})
/*
export const updateChannelDetails = (channel, channelDetails) => (dispatch) => {
	return updateChannelAndSaveToDB(channel, channelDetails).then(playlistData => {
			dispatch({type: INITIALIZED_CURATION_LIST, result: playlistData})
	}).catch((err) => console.log(err))
}
*/

export const updateChannelDetailsInCurateList = (channel, channelDetails) =>  {
	return (dispatch, getState) => {
		Promise.all([
			dispatch({type: UPDATE_CHANNEL_DETAILS_IN_CURATION_LIST, channel:channel, channelDetails: channelDetails})
		])
		.then(() => { 
			saveChannelToDB(channel, getState().curationList)
		})
		.catch((err) => console.log(err))
	}
}