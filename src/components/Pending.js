import React from 'react';
import PendingContainer from './PendingContainer';
import '../styles/Pending.css';
import SendtoDates from './SendtoDates';
import { useSelector } from 'react-redux';

export default function Pending() {
	const pending = useSelector((state) => state.pendingaccept);
	console.log(pending);
	return (
		<>
			{!pending ? (
				<>
					<h1 className="heading">PENDING</h1>
					<div id="pending__container" className="grid">
						<PendingContainer></PendingContainer>
					</div>
				</>
			) : (
				<SendtoDates></SendtoDates>
			)}
		</>
	);
}

// {
// 	pending ? (
// 		<>
// 			{' '}
// 			<h1>Pending Dates</h1>
// 			<div id="pending__container" className="grid">
// 				<PendingContainer></PendingContainer>
// 			</div>
// 		</>
// 	) : (
// 		<SendtoDates></SendtoDates>
// 	);
// }
