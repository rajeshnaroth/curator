import Bootstrap from 'bootstrap/dist/css/bootstrap.css'
require('../../scss/app.scss') // Tells webpack to include this.

import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'

import ShelfPage   from './pages/shelfPage'
import PlayerPage  from './pages/playerPage'
import CuratorPage from './pages/curatorPage'
import TestPage    from './pages/testPage'
import Header      from './frame/header'
import Footer      from './frame/footer'


const Root = ({store}) => (
	<div>
		<Header store={store} />
		<div className="center-container">
			<div className="content mainContent">
				<Provider store={store}>
					<Router history={browserHistory}>
						<Route path="/" store={ store } component={ ShelfPage } />
						<Route path="/player/:videoId" store={ store } component={ PlayerPage }/>
						<Route path="/curator" store={ store } component={ CuratorPage }/>
						<Route path="/test/:vid" store={ store } component={ TestPage }/>
					</Router>
				</Provider>
			</div>
		</div>
	    <Footer store={store} />
	</div>
)

export default Root