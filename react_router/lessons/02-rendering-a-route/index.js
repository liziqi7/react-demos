import React from 'react'
import {
    render
}
from 'react-dom'
import {
    Router, Route, hashHistory,IndexRoute,Redirect,IndexRedirect,browserHistory 
}
from 'react-router'

import App from './modules/App'

import Home from './modules/Home'

import About from './modules/About'

import A404 from './modules/A404'

import Messages from './modules/Messages'

import Counter from './modules/Counter'

// browserHistory.push('/messages/abc');

render(
	(<Router history = {hashHistory} >
		<Route path = "/" component = {App}>
			<IndexRoute component={Home} />
			<Route path = "/about" component = {About}>
				<Redirect from="messages/:id" to="/messages/:id"></Redirect>
			</Route>
			<Route path = "/counter" component = {Counter} />
			<Route path = "/404" component = {A404} />
			<Route path = "/messages/:id" component = {Messages} />
		</Route>
	</Router>)
    ,document.getElementById('app')
)
