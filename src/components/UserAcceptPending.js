import React from 'react';
import UserAcceptPendingCard from './UserAcceptPendingCard';

export default function UserAcceptPending(props) {
	return (
		<div>
			PENDINGs SENT TO USER WITH A BUTTON TO ACCEPR OR DECLINE
			<div>
				{props.userAccept.map((s) => (
					<UserAcceptPendingCard key={s.id} pending={s}></UserAcceptPendingCard>
				))}
			</div>
		</div>
	);
}
