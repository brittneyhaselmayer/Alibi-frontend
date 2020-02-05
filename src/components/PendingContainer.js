import React, { useEffect, useState } from 'react';
import UserSentPending from './UserSentPending';
import { useSelector } from 'react-redux';
import UserAcceptPending from './UserAcceptPending';

export default function PendingContainer() {
	const [pending, setPending] = useState([]);
	// console.log(pending);

	const currentuserid = useSelector((state) => state.currentUser.id);

	const userSent = pending.filter((p) => p.alibi_1_id === currentuserid);
	// console.log(userSent);

	const userAccept = pending.filter((p) => p.alibi_2_id === currentuserid);
	// console.log(userAccept);

	useEffect(() => {
		fetch('http://localhost:3000/pendings').then((resp) =>
			resp.json().then((data) => setPending(data))
		);
	}, []);

	return (
		<div>
			pending container
			<div>
				<UserSentPending userSent={userSent}></UserSentPending>
				<UserAcceptPending userAccept={userAccept}></UserAcceptPending>
			</div>
		</div>
	);
}
