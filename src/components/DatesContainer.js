import React, { useEffect, useState } from 'react';
import DatesIncoming from './DatesIncoming';
import DatesOutgoing from './DatesOutgoing';
import { useSelector } from 'react-redux';

export default function DatesContainer() {
	const [dates, setDates] = useState([]);
	console.log(dates);
	const currentuserid = useSelector((state) => state.currentUser.id);
	console.log(currentuserid);

	useEffect(() => {
		fetch('http://localhost:3000/meetups').then((resp) =>
			resp.json().then((data) => setDates(data))
		);
	}, []);

	const youaccepted = dates.filter((d) => d.alibi_2.user_id === currentuserid);
	// console.log(youaccepted);

	const sentoutandaccepted = dates.filter(
		(d) => d.alibi_1.user_id === currentuserid
	);
	// console.log(sentoutandaccepted);

	return (
		<>
			<DatesIncoming youaccepted={youaccepted} />

			<DatesOutgoing sentoutandaccepted={sentoutandaccepted} />
		</>
	);
}
