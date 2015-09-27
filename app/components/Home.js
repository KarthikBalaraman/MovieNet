import React from 'react';
import Movie from './Movie'

class Home extends React.Component {
	render(){
		return(
			<div className="container">
				<Movie/>
			</div>
			);
	}
}

export default Home;