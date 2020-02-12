import React from 'react';
import { useSelector } from 'react-redux';

export default function Instructions() {
	const currentUser = useSelector((state) => state.currentUser.name);
	console.log(currentUser);
	return (
		<>
			<p className="paragraph">
				Need to get out of plans {currentUser}? <br></br>
				We can help! <br></br>
				Start by submitting the date you need an Alibi for below.
			</p>
		</>
	);
}
