import React, { useEffect, useState } from 'react';
import DatesIncomingCard from './DatesIncomingCard';
import DatesOutgoingCard from './DatesOutgoingCard';
import { useSelector } from 'react-redux';

export default function DatesContainer() {
	const [dates, setDates] = useState([]);
	console.log(dates);
	const currentuserid = useSelector((state) => state.currentUser.id);

	useEffect(() => {
		fetch('http://localhost:3000/meetups').then((resp) =>
			resp.json().then((data) => setDates(data))
		);
	}, []);

	const acceptedfromothers = dates.filter(
		(d) => d.alibi_2_id === currentuserid
	);
	console.log(acceptedfromothers);

	const sentoutandaccepted = dates.filter(
		(d) => d.alibi_1_id === currentuserid
	);
	console.log(sentoutandaccepted);

	return (
		<div>
			<DatesIncomingCard></DatesIncomingCard>
			<DatesOutgoingCard></DatesOutgoingCard>
		</div>
	);
}
