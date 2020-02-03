import React, { useState, useEffect } from 'react';
import Eventcard from './Eventcard';

export default function Eventscontainer() {
	const [events, setEvents] = useState([]);

	useEffect(() => {
		fetch('http://localhost:3000/events')
			.then((resp) => resp.json())
			.then((data) => setEvents(data));
	}, []);

	console.log(events);
	return (
		<div>
			{events.map((event) => (
				<Eventcard event={event} key={event.id} />
			))}
		</div>
	);
}
