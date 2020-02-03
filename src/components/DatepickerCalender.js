import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { useSelector } from 'react-redux';

import 'react-datepicker/dist/react-datepicker.css';

export default function DatepickerCalender() {
	const currentUser = useSelector((state) => state.currentUser.id);
	const [startDate, setStartDate] = useState(new Date());
	const month = startDate.getMonth() + 1;
	const day = startDate.getDate();
	const year = startDate.getFullYear();
	const datearr = [month, day, year].toString();
	// console.log(datearr);
	// console.log(month); // month (1-12)
	// console.log(day); // day of the month (1-31)
	// console.log(year); // year
	// console.log(currentUser);

	const postAlibi = () => {
		fetch('http://localhost:3000/alibis', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: JSON.stringify({
				alibi: {
					user_id: currentUser,
					when: datearr
				}
			})
		}).then((r) => r.json());
		// .then((data) => console.log(data));
		// .then((data) => console.log(data));
	};

	return (
		<div>
			<DatePicker
				selected={startDate}
				onChange={(date) => setStartDate(date)}
			/>
			<button onClick={() => postAlibi()}>Submit date</button>
		</div>
	);
}
