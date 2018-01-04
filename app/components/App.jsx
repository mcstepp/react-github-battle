import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './app.css';

import Nav from './Nav.jsx';
import Popular from './Popular.jsx';
import Home from './Home.jsx';
import Battle from './Battle.jsx';

// state 
// lifecycle event 
// UI => render view

class App extends Component {
	render() {
		return(
			<Router>
				<div className='container'>
					<Nav />
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/battle' component={Battle} />
						<Route path='/popular' component={Popular} />
						<Route render={function() {
							return <p>Not found</p>
						}} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;