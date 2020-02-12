import React from 'react';
import DatesIncomingCard from './DatesIncomingCard';

export default function DatesIncoming(props) {
	return (
		<div id="uad-cards__container" className="grid">
			<h2>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;You
				Accepted!
			</h2>
			{props.youaccepted.map((e) => (
				<DatesIncomingCard key={e.id} date={e}></DatesIncomingCard>
			))}
		</div>
	);
}
