import React, { useEffect, useState } from 'react';
import AlibiCard from './AlibiCard';

export default function AlibiContainer() {
	const [alibis, setAlibis] = useState([]);

	useEffect(() => {
		fetch('http://localhost:3000/alibis')
			.then((resp) => resp.json())
			.then((data) => setAlibis(data));
	}, []);

	return (
		<div>
			{alibis.map((alibi) => (
				<AlibiCard alibi={alibi} key={alibi.id}></AlibiCard>
			))}
		</div>
	);
}
