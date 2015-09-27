import React from 'react'
import {Link} from 'react-router'
import MovieStore from '../stores/MovieStore'
//import NavbarActions from '../actions/NavbarActions'

class Movies extends React.Component{
	constructor(props){
		super(props);
		this.state = MovieStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount(){
		MovieStore.listen(this.onChange);
		//NavbarActions.navigate();
	}

	componentWillUnmount(){
		MovieStore.unlisten(this.onChange);
	}

	onChange(state){
		this.setState(state);
	}

	render(){
		var whiteBackground = {
			backgroundColor:'white'
		};
		let movies = this.state.movies.map((movie) => {
	      	return (
		        <div className="jumbotron">
		          	<div className="row">
			            <div className="col-lg-2">
		              		<img src={movie.ImageLink}/>
			            </div>
		            	<div className="col-lg-8">
			              	<h3>
			              		{movie.Name}
		              		</h3>
			              	<div> 
			              		{movie.Description}
			              	</div>
			              	<div>
			                	<div className="bs-component">
			              			<button type="button" className="btn-small" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Karthik">Like (1)</button>

			              			<button type="button" className="btn-small" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Danny, Mohan and 2 more">Dislike (4)</button>

			              			<button type="button" className="btn-small" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="">Recommended (0)</button>
			              		</div>
			            	</div>
			          	</div>
			        </div>
			    </div>
		    );
		});
		return (
			<div>
				{movies}	
			</div>
		);
	}
}

export default Movies;