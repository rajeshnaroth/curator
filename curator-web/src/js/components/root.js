import Bootstrap from 'bootstrap/dist/css/bootstrap.css'
require('../../scss/app.scss') // Tells webpack to include this.

import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'

import HomePage   from './pages/homePage'
import ShowPage   from './pages/showPage'
import PlayerPage  from './pages/playerPage'
import CuratorPage from './pages/curatorPage'
import TestPage    from './pages/testPage'
import Header      from './frame/header'
import Footer      from './frame/footer'


const Root = ({store}) => (
	<div>
			<div className="content mainContent">
				<Provider store={store}>
					<Router history={browserHistory}>
						<Route path="/" store={ store } component={ HomePage } />
						<Route path="/show(/:channel)" store={ store } component={ ShowPage } />
						<Route path="/player/:videoId" store={ store } component={ PlayerPage }/>
						<Route path="/curate(/:channel)" store={ store } component={ CuratorPage }/>
						<Route path="/test" store={ store } component={ TestPage }/>
					</Router>
				</Provider>
			</div>
	    <Footer store={store} />
	</div>
)

export default Root