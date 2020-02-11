import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import UserHome from './components/Userhome';
import Nav from './components/Nav';
import { useSelector } from 'react-redux';

function App() {
	const logg = useSelector((state) => state.isLogged);
	return (
		// <Router>
		// 	<div>
		// 		<Nav></Nav>
		// 		<Switch>
		// 			<Route path="/" exact component={Signup}></Route>
		// 			<Route path="/login" component={Login}></Route>
		// 			<Route path="/home" component={UserHome}></Route>
		// 		</Switch>
		// 	</div>
		// </Router>
		<>
			{logg ? (
				<Router>
					<main id="main__container" className="grid">
						<Nav></Nav>
						{/* <Switch> */}
						<Redirect to="/home" component={UserHome}></Redirect>
						{/* <UserHome></UserHome> */}
						<Route path="/home" component={UserHome}></Route>
						{/* </Switch> */}
					</main>
				</Router>
			) : (
				<Router>
					<Nav></Nav>
					<Switch>
						<Route path="/" exact component={Signup}></Route>
						<Route path="/login" component={Login}></Route>
						{/* <Route path="/home" component={UserHome}></Route> */}
					</Switch>
				</Router>
			)}
		</>
	);
}

export default App;
