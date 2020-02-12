import React from 'react';
import DatesOutgoingCard from './DatesOutgoingCard';

export default function DatesOutgoing(props) {
	return (
		<div id="usd-cards__container" className="grid">
			<h2>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;They
				Accepted!
			</h2>
			{props.sentoutandaccepted.map((e) => (
				<DatesOutgoingCard key={e.id} date={e}></DatesOutgoingCard>
			))}
		</div>
	);
}
