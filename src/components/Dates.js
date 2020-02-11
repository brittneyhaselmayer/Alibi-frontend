import React from 'react';
import DatesContainer from './DatesContainer';
import '../styles/Dates.css';
export default function Dates() {
	return (
		<>
			<h1>Dates</h1>
			<div id="date__container" className="grid">
				<DatesContainer></DatesContainer>
			</div>
		</>
	);
}
