import React from 'react';
import SideBar from './Sidebar';
import Alibi from './Alibi';
import Pending from './Pending';
import Events from './Events';
import Dates from './Dates';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
export default function Userhome() {
	return (
		<Router>
			<div>
				<SideBar></SideBar>
				<Switch>
					<div className="main">
						<Route path="/home" exact component={Home}></Route>
						<Route path="/home/alibi" component={Alibi}></Route>
						<Route path="/home/pending" component={Pending}></Route>
						<Route path="/home/events" component={Events}></Route>
						<Route path="/home/dates" component={Dates}></Route>
					</div>
				</Switch>
			</div>
		</Router>
	);
}
