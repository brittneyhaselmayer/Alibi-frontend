import React from 'react';
import PendingContainer from './PendingContainer';
import '../styles/Pending.css';

export default function Pending() {
	return (
		<>
			<h1>Pending Dates</h1>
			<div id="pending__container" className="grid">
				<PendingContainer></PendingContainer>
			</div>
		</>
	);
}
