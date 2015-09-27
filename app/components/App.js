import React from 'react';
import {RouteHandler} from 'react-router';
import Navbar from './Navbar';

class App extends React.Component {
	
	render(){
		//Padding to stop content from hiding behind the static header
		let padding = {
			padding:'135px'
		};
		
		return (
			<div>
				<Navbar/>
				<div style={padding}>
					<RouteHandler />
				</div>
			</div>
			);
	}
}

export default App;