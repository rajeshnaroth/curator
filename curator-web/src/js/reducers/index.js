import {combineReducers} from 'redux'
import shelf from './shelf'
import player from './player'
import curator from './curator'

export default combineReducers({
    shelf,
    player,
    curator
});