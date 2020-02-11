import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';
// import { useSelector } from 'react-redux';
// import useForceUpdate from 'use-force-update';

const useStyles = makeStyles({
	card: {
		maxWidth: 275
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)'
	},
	title: {
		fontSize: 14
	},
	pos: {
		marginBottom: 12
	}
});

export default function UserAcceptPendingCard(props) {
	// let currentUserid = useSelector((state) => state.currentUser.id);
	// console.log(props);
	// console.log(props.pending.id);
	// console.log(props.pending.event.id);
	// console.log(props.pending.event.occasion);
	// const forceUpdate = useForceUpdate();
	const classes = useStyles();

	const [user, setUser] = useState({});

	// eslint-disable-next-line
	const findNeededUser = (users) => {
		let neededUser = users.find((u) => u.id === props.pending.alibi_1.user_id);
		setUser(neededUser);
	};

	useEffect(() => {
		fetch('http://localhost:3000/users')
			.then((resp) => resp.json())
			.then((data) => findNeededUser(data));
		// eslint-disable-next-line
	}, []);

	const reutrnName = (user) => {
		if (user) {
			return <h1> {user.name} </h1>;
		}
	};

	// const returnId = (user) => {
	// 	if (user) {
	// 		return user.id;
	// 	}
	// };

	let pendingid = props.pending.id;

	const handleDelete = () => {
		fetch(`http://localhost:3000/pendings/${pendingid}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json'
			}
		});
	};

	// const letsSee = () => {
	// 	console.log('adf');
	// 	fetch('http://localhost:3000/users')
	// 		.then((resp) => resp.json())
	// 		.then((data) => findNeededUser(data));
	// };

	const handleAccept = () => {
		fetch('http://localhost:3000/meetups', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: JSON.stringify({
				meetup: {
					date: props.pending.date,
					alibi_1_id: props.pending.alibi_1_id,
					alibi_2_id: props.pending.alibi_2_id,
					event_id: props.pending.event.id
				}
			})
		})
			.then((r) => r.json())
			.then(() => handleDelete());
	};

	return (
		<Card className={`${classes.card} card__container`} variant="outlined">
			<CardContent>
				<Typography gutterBottom>Invite From:{reutrnName(user)}</Typography>
				<Typography className={classes.pos}>
					Go to:
					<h2>{props.pending.event.occasion}</h2>
				</Typography>
				<Typography>
					On:
					<h2>{props.pending.date}</h2>
				</Typography>

				<Typography variant="body2" component="p">
					{/* description at some point */}
				</Typography>
			</CardContent>
			<CardActions>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<span className="button" size="small" onClick={() => handleAccept()}>
					Accept
				</span>
				<span className="button" size="small" onClick={() => handleDelete()}>
					Decline
				</span>
			</CardActions>
		</Card>
	);
}
