import React from 'react'

import {Router, Route, browserHistory} from 'react-router'
import App from './app'
import Header from './frame/header'
import Footer from './frame/footer'

const Root = ({store}) =>(
	<div>
		<Header />
		<Router history={browserHistory}>
			<Route path="/" component={() => <App store={store} />} />
		</Router>
	    <Footer />
	</div>
)

export default Root