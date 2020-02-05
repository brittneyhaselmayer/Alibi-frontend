import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';

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
	let currentUserid = useSelector((state) => state.currentUser.id);

	// console.log(props.pending.id);
	// console.log(props.pending.event.id);
	// console.log(props.pending.event.occasion);
	const classes = useStyles();

	const [user, setUser] = useState({});

	// eslint-disable-next-line
	const findNeededUser = (users) => {
		let neededUser = users.find((u) => u.id === props.pending.alibi_1_id);
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

	const returnId = (user) => {
		if (user) {
			return user.id;
		}
	};

	const neededid = returnId(user);

	let pendingid = props.pending.id;

	const handleDelete = () => {
		fetch(`http://localhost:3000/pendings/${pendingid}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json'
			}
		}).then((response) => {
			console.log('Item was deleted!');
		});
	};

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
					alibi_1_id: neededid,
					alibi_2_id: currentUserid,
					event_id: props.pending.event.id
				}
			})
		})
			.then((r) => r.json())
			.then(() => handleDelete());
	};

	return (
		<Card className={classes.card} variant="outlined">
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
				<Button size="small" onClick={() => handleAccept()}>
					Accept
				</Button>
				<Button size="small" onClick={() => handleDelete()}>
					Decline
				</Button>
			</CardActions>
		</Card>
	);
}
