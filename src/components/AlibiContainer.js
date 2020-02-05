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
	}, []);

	const selected = useSelector((state) => state.alibiselect);

	return (
		// <div>
		// 	{alibis.map((alibi) => (
		// 		<AlibiCard alibi={alibi} key={alibi.id}></AlibiCard>
		// 	))}
		// </div>
		<div>
			{selected ? (
				<SendtoEvents></SendtoEvents>
			) : (
				<div>
					<div>
						<DatepickerCalender></DatepickerCalender>
					</div>
					{alibis.map((alibi) => (
						<AlibiCard alibi={alibi} key={alibi.id}></AlibiCard>
					))}
				</div>
			)}
		</div>
	);
}

// {selected ? (
// 		<SendtoEvents></SendtoEvents>
//  ) : (
// 		<div>
// 			{alibis.map((alibi) => (
// 				<AlibiCard alibi={alibi} key={alibi.id}></AlibiCard>
// 			))}
// 		</div>
//  );}
