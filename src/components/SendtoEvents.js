import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function SendtoEvents() {
	const picked = useSelector((state) => state.twoAlibis.chosenAlibi);
	return (
		<div>
			<h1> {`You have selected ${picked} as an alibi`}</h1>
			<Link to="/home/events">
				<button>Select Event</button>
			</Link>
		</div>
	);
}
