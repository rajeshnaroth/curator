import {SLIDE_RIGHT, SLIDE_LEFT} from '../actions'
import _ from 'lodash'

const carousel = function (state={}, action={}) {
    switch(action.type) {

        case SLIDE_LEFT: {
            return Object.assign({}, state, {currentTarget:action.target});
        }

        case SLIDE_RIGHT: {
            return Object.assign({}, state, {currentTarget:action.target});
        }
    }
}

export default carousel