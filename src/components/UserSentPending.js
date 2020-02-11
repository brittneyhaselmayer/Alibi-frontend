import React from 'react';
import UserSentPendingCard from './UserSentPendingCard';

export default function UserSentPending(props) {
	// console.log(props);

	return (
		<div id="usp-cards__container" className="grid">
			{props.userSent.map((s) => (
				<UserSentPendingCard pending={s} key={s.id}></UserSentPendingCard>
			))}
		</div>
	);
}
