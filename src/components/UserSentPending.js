import React from 'react';
import UserSentPendingCard from './UserSentPendingCard';

export default function UserSentPending(props) {
	// console.log(props);

	return (
		<div>
			PENDING WITH NO BUTTON / WAITING FOR OTHER ALIBI TO ACCEPT
			<div>
				{props.userSent.map((s) => (
					<UserSentPendingCard pending={s} key={s.id}></UserSentPendingCard>
				))}
			</div>
		</div>
	);
}
