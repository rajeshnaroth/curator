import {combineReducers} from 'redux'
import channelSummary from './channelSummary'
import channelDetails from './channelDetails'
import shelf from './shelf'
import player from './player'
import curationList from './curationList'
import channelPlayList from './channelPlaylist'
import filmDetails from './filmDetails'
import filmBubble from './filmBubble'
import newVideo from './newVideo'

export default combineReducers({
    channelSummary,
    channelDetails,
    shelf,
    player,
    curationList,
    channelPlayList,
    filmDetails,
    filmBubble,
    newVideo
});