import React from 'react'

import {Router, Route, browserHistory} from 'react-router'
import ShowModule from './shelf/showModule'
import App from './app'
import Header from './frame/header'
import Footer from './frame/footer'

const Root = ({store}) => (
	<div>
		<Header />
		<div className="center-container">
			<div className="content mainContent">
				<Router history={browserHistory}>
					<Route path="/" component={() => <App store={store} />}>
					</Route>
				</Router>
			</div>
		</div>
	    <Footer />
	</div>
)

export default Root