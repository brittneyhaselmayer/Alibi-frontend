import React from 'react';
import { Link } from 'react-router-dom';
import pendingaccepted from '../actions/pendingaccepted';
import { useDispatch } from 'react-redux';

export default function SendtoDates() {
	const dispatch = useDispatch();

	const pendingtodate = () => {
		dispatch(pendingaccepted());
	};
	return (
		<>
			<h1>
				Congrats, you now have an Alibi! Happy we could get you out of those
				plans.
			</h1>
			<Link to="/home/dates">
				<span className="button" onClick={() => pendingtodate()}>
					View Dates
				</span>
			</Link>
		</>
	);
}
