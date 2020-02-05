import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
	console.log(props);
	// console.log(props.pending.date);
	// console.log(props.pending.event.occasion);
	const classes = useStyles();

	const [user, setUser] = useState({ name: '' });
	// console.log(users);

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
				<Button size="small">Accept</Button>
				<Button size="small">Decline</Button>
			</CardActions>
		</Card>
	);
}
