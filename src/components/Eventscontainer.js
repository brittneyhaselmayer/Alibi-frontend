import React, { useState, useEffect } from 'react';
import Eventcard from './Eventcard';
import movie from '../assets/movie.jpg';
import brunch from '../assets/brunch.jpg';
import dinner from '../assets/dinner.jpg';
import hiking from '../assets/hiking.jpg';
import lunch from '../assets/lunch.jpg';
import workout from '../assets/workout.jpg';
import yoga from '../assets/yoga.jpg';
import bowling from '../assets/bowling.jpg';
import fishing from '../assets/fishing.jpg';
import dancing from '../assets/dancing.jpg';
import shopping from '../assets/shopping.jpg';
import running from '../assets/running.jpg';
import kayaking from '../assets/kayaking.jpg';
import concert from '../assets/concert.jpg';
import vacation from '../assets/vacation.jpg';
import swimming from '../assets/swimming.jpg';
import cooking from '../assets/cooking.jpg';
import camping from '../assets/camping.jpg';
import biking from '../assets/biking.jpg';
import painting from '../assets/painting.jpg';

import '../styles/Events.css';

export default function Eventscontainer() {
	const [events, setEvents] = useState([]);

	useEffect(() => {
		fetch('http://localhost:3000/events')
			.then((resp) => resp.json())
			.then((data) => setEvents(data));
	}, []);

	const imageObj = {
		brunch,
		dinner,
		hiking,
		lunch,
		movie,
		workout,
		yoga,
		bowling,
		fishing,
		dancing,
		shopping,
		running,
		kayaking,
		concert,
		vacation,
		swimming,
		cooking,
		camping,
		painting,
		biking
	};

	return (
		<div id="events-cards__container" className="grid">
			{events.map((event) => (
				<Eventcard event={event} key={event.id} image={imageObj} />
			))}
		</div>
	);
}
