
import React from 'react';
import ReactDOM from 'react-dom';
import { default as Router, Route, hashHistory, Link } from 'react-router';

const RouteHandler = Router.RouteHandler;

class App extends React.Component {
	render() {
		return <div>
			<h1> App </h1>
			<Link to="/user">User</Link>
			<Link to="/about">About</Link>
			{this.props.children}
		 </div>
	}
}

class About extends React.Component {
	render() {
		return <p> About page </p>
	}
}

class User extends React.Component {
	render() { console.log('User');
		return <p> User page </p>
	}
}

const routes = <Router history={hashHistory}>
		<Route path="/" component={App}>
			<Route path="user" component={User} />
			<Route path="about" component={About} />
		</Route>
		</Router>


ReactDOM.render(routes, document.getElementById('container'));