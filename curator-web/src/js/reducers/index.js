import {combineReducers} from 'redux'
import channels from './channels'
import shelf from './shelf'
import player from './player'
import curationList from './curationList'
import channelPlayList from './channelPlayList'
import filmDetails from './filmDetails'
import filmBubble from './filmBubble'

export default combineReducers({
    channels,
    shelf,
    player,
    curationList,
    channelPlayList,
    filmDetails,
    filmBubble
});