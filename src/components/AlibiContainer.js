import React, { useEffect, useState } from 'react';
import AlibiCard from './AlibiCard';
import SendtoEvents from './SendtoEvents';
import DatepickerCalender from './DatepickerCalender';
import { useSelector } from 'react-redux';

export default function AlibiContainer() {
	const [alibis, setAlibis] = useState([]);

	useEffect(() => {
		fetch('http://localhost:3000/alibis')
			.then((resp) => resp.json())
			.then((data) => setAlibis(data));
		// .then((data) => find(data));
		// eslint-disable-next-line
	}, []);

	const selected = useSelector((state) => state.alibiselect);
	// const currentuserid = useSelector((state) => state.currentUser.id);

	return (
		<>
			{selected ? (
				<SendtoEvents></SendtoEvents>
			) : (
				<>
					<div>
						<DatepickerCalender></DatepickerCalender>
					</div>
					<div id="alibi-cards__container" className="grid">
						{alibis.map((alibi) => (
							<AlibiCard alibi={alibi} key={alibi.id}></AlibiCard>
						))}
					</div>
				</>
			)}
		</>
	);
}
