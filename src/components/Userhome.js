import React from 'react';
import SideBar from './Sidebar';
import Alibi from './Alibi';
import Pending from './Pending';
import Events from './Events';
import Dates from './Dates';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
export default function Userhome() {
	return (
		<Router>
			<SideBar></SideBar>
			<Switch>
				<>
					<div className="main">
						<Route path="/home" exact component={Alibi}></Route>
						{/* <Route path="/home/alibi" component={Alibi}></Route> */}
						<Route path="/home/pending" component={Pending}></Route>
						<Route path="/home/events" component={Events}></Route>
						<Route path="/home/dates" component={Dates}></Route>
					</div>
				</>
			</Switch>
		</Router>
	);
}
