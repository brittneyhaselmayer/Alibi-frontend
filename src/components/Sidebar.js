import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';

export default function Sidebar() {
	return (
		<div id="sidenav">
			<ul>
				<li>
					<Link to="/home">
						<span className="button">Alibi</span>
					</Link>
				</li>
				<li>
					<Link to="/home/events">
						<span className="button">Events</span>
					</Link>
				</li>
				<li>
					<Link to="/home/pending">
						<span className="button">Pending Dates</span>
					</Link>
				</li>
				<li>
					<Link to="/home/dates">
						<span className="button">My Dates</span>
					</Link>
				</li>
			</ul>
		</div>
	);
}
