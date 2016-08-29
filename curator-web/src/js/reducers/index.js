import {combineReducers} from 'redux'
import shelf from './shelf'
import player from './player'
import curationList from './curationList'
import channelPlayList from './channelPlayList'

export default combineReducers({
    shelf,
    player,
    curationList,
    channelPlayList
});