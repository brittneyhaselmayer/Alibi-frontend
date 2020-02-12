import React from 'react';
// import DatepickerCalender from './DatepickerCalender';
import AlibiContainer from './AlibiContainer';
import Instructions from './Instructions';
import '../styles/Alibi.css';

export default function Alibi() {
	return (
		<div>
			<h1 className="heading">ALIBI</h1>

			<Instructions></Instructions>
			<AlibiContainer></AlibiContainer>
		</div>
	);
}
