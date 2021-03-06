import React, { useEffect, useState } from 'react';
import UserSentPending from './UserSentPending';
import { useSelector } from 'react-redux';
import UserAcceptPending from './UserAcceptPending';

export default function PendingContainer() {
	const [pending, setPending] = useState([]);
	console.log(pending);

	const currentuserid = useSelector((state) => state.currentUser.id);
	console.log(currentuserid);

	const userSent = pending.filter((p) => p.alibi_1.user_id === currentuserid);
	// console.log(userSent);

	const userAccept = pending.filter((p) => p.alibi_2.user_id === currentuserid);
	// console.log(userAccept);

	useEffect(() => {
		fetch('http://localhost:3000/pendings')
			.then((resp) => resp.json())
			.then((data) => setPending(data));
		// .then((data) => console.log(data));
	}, []);

	return (
		<>
			<UserSentPending userSent={userSent}></UserSentPending>
			<UserAcceptPending userAccept={userAccept}></UserAcceptPending>
		</>
	);
}
