import React from 'react'
import {Link} from 'react-router'
//import NavbarStore from '../stores/NavbarStore'
//import NavbarActions from '../actions/NavbarActions'

class Navbar extends React.Component{
	/*constructor(props){
		super(props);
		this.state = NavbarStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount(){
		NavbarStore.listen(this.onChange);
		//NavbarActions.navigate();
	}

	componentWillUnmount(){
		NavbarStore.unlisten(this.onChange);
	}

	onChange(state){
		this.setState(state);
	}*/

	render(){
		var whiteBackground = {
			backgroundColor:'white'
		};
		return (
			<div className="navbar navbar-default navbar-fixed-top">
				<div className="container">
					<div>
						<a href="#" className="navbar-brand">MovieNet</a>
						<button className="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-main">
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						</button>
					</div>
				</div>
				<div style={whiteBackground}>
					<div className="container" >
						<div className="bs-component" >
							<div className="row">
								<div className="col-lg-12">
									<ul className="nav nav-pills navbar-left col-lg-2">
										<li className="dropdown">
											<a className="dropdown-toggle" data-toggle="dropdown" href="#">
											Home <span className="caret"></span>
										</a>
										<ul className="dropdown-menu">
											<li><a href="#">Settings</a></li>
											<li><a href="/People">People</a></li>
											<li className="divider"></li>
											<li><a href="#">Separated link</a></li>
										</ul>
										</li>
									</ul>

									<form className="navbar-left col-lg-9">
									<input type="text" className="form-control" placeholder="Search Movies"/>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>);
	}
}

export default Navbar;