import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import hourglass from '../assets/hourglass.png';

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

export default function UserSentPendingCard(props) {
	const classes = useStyles();
	console.log(props);

	const [user, setUser] = useState({ name: '' });
	// console.log(users);

	const findNeededUser = (users) => {
		let neededUser = users.find((u) => u.id === props.pending.alibi_2.user_id);
		setUser(neededUser);
	};

	// console.log(user);

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
		<Card className={`${classes.card} card__container`} variant="outlined">
			<CardContent>
				<Typography>
					Waiting for:
					{reutrnName(user)}
				</Typography>
				<Typography className={classes.pos}>
					To accept:
					<h2>{props.pending.event.occasion}</h2>
				</Typography>
				<Typography>
					On:
					<h2>{props.pending.date}</h2>
				</Typography>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<img src={hourglass} alt="hourglass"></img>
				<Typography variant="body2" component="p"></Typography>
			</CardContent>
			<CardActions></CardActions>
		</Card>
	);
}
