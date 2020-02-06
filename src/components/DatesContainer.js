import React, { useEffect, useState } from 'react';
import DatesIncomingCard from './DatesIncomingCard';
import DatesOutgoingCard from './DatesOutgoingCard';
import { useSelector } from 'react-redux';

export default function DatesContainer() {
	const [dates, setDates] = useState([]);
	// console.log(dates);
	const currentuserid = useSelector((state) => state.currentUser.id);

	useEffect(() => {
		fetch('http://localhost:3000/meetups').then((resp) =>
			resp.json().then((data) => setDates(data))
		);
	}, []);

	const youaccepted = dates.filter((d) => d.alibi_2_id === currentuserid);
	// console.log(youaccepted);

	const sentoutandaccepted = dates.filter(
		(d) => d.alibi_1_id === currentuserid
	);
	// console.log(sentoutandaccepted);

	return (
		<div>
			<div>
				{youaccepted.map((e) => (
					<DatesIncomingCard key={e.id} date={e}></DatesIncomingCard>
				))}
			</div>
			<div>
				{sentoutandaccepted.map((e) => (
					<DatesOutgoingCard key={e.id} date={e}></DatesOutgoingCard>
				))}
			</div>
		</div>
	);
}
