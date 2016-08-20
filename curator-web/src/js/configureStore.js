import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise'
import { thunk } from './utils'
import reducer from './reducers'

const configureStore = () => {
	return createStore(reducer, applyMiddleware(thunk))
}

export default configureStore