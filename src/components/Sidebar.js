import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
	return (
		<div className="sidenav">
			<Link to="/home/alibi">
				<button>Alibi</button>
			</Link>
			<Link to="/home/events">
				<button>Events</button>
			</Link>
			<Link to="/home/pending">
				<button>Pending Dates</button>
			</Link>
			<Link to="/home/dates">
				<button>My Dates</button>
			</Link>
			<Link to="/home">
				<button>Home</button>
			</Link>
		</div>
	);
}
