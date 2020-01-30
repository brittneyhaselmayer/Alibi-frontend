import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import UserHome from './components/Userhome';
import Nav from './components/Nav';

function App() {
	return (
		<Router>
			<div>
				<Nav></Nav>
				<Switch>
					<Route path="/" exact component={Signup}></Route>
					<Route path="/login" component={Login}></Route>
					<Route path="/home" component={UserHome}></Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
