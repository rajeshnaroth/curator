import { INITIALIZED_CURATION_LIST } from './shared'
import { 
	getChannelDetailsFromDB, 
	getChannelSummaryFromDB, 
	deleteChannelAndSaveToDB, 
	updateChannelAndSaveToDB, 
	addChannelAndSaveToDB 
} from '../api/persistence'

export const INITIALIZED_CHANNEL_DETAILS = 'INITIALIZED_CHANNEL_DETAILS'
export const INITIALIZED_CHANNEL_SUMMARY = 'INITIALIZED_CHANNEL_SUMMARY'
export const DELETE_CHANNEL = 'DELETE_CHANNEL'
export const ADD_CHANNEL = 'ADD_CHANNEL'

// Channel
export const fetchChannelDetailsFromDB = () => (dispatch) => {
	return getChannelDetailsFromDB().then(channelDetails => {
		console.log("index.js: ", channelDetails);
		        
			dispatch({type: INITIALIZED_CHANNEL_DETAILS, result: channelDetails})
	}).catch((err) => console.log(err))
}

export const fetchChannelsFromDB = () => (dispatch) => {
	return getChannelSummaryFromDB().then(channels => {
		console.log("index.js: ", channels);
		        
			dispatch({type: INITIALIZED_CHANNEL_SUMMARY, result: channels})
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

export const updateChannelDetails = (channel, channelDetails) => (dispatch) => {
	return updateChannelAndSaveToDB(channel, channelDetails).then(playlistData => {
			dispatch({type: INITIALIZED_CURATION_LIST, result: playlistData})
	}).catch((err) => console.log(err))
}
