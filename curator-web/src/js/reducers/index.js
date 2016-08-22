import {combineReducers} from 'redux'
import shelf from './shelf'
import player from './player'

export default combineReducers({
    shelf,
    player
});