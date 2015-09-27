import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import People from './components/People';

export default (
	<Route handler={App}>
		<Route path="/Home" handler={Home}/>
		<Route path="/People" handler={People}/>
	</Route>
	);