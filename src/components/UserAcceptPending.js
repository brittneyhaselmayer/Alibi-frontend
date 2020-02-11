import React from 'react';
import UserAcceptPendingCard from './UserAcceptPendingCard';

export default function UserAcceptPending(props) {
	return (
		<div id="uap-cards__container" className="grid">
			{props.userAccept.map((s) => (
				<UserAcceptPendingCard key={s.id} pending={s}></UserAcceptPendingCard>
			))}
		</div>
	);
}
