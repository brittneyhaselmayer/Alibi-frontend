import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { useSelector, useDispatch } from 'react-redux';
import isAlibi from '../actions/isAlibi';

import 'react-datepicker/dist/react-datepicker.css';

export default function DatepickerCalender() {
	const dispatch = useDispatch();
	const currentUser = useSelector((state) => state.currentUser.id);
	const [startDate, setStartDate] = useState(new Date());
	const month = startDate.getMonth() + 1;
	const day = startDate.getDate();
	const year = startDate.getFullYear();
	const datearr = [month, day, year].toString();
	let date = datearr.replace(/,/g, '/');

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
					when: date
				}
			})
		})
			.then((r) => r.json())
			.then(() => dispatch(isAlibi()));
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
