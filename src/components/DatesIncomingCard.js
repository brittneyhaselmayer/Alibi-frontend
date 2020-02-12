import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';
import { useSelector, useDispatch } from 'react-redux';
import celebrate from '../assets/celebrate.jpg';

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

export default function DatesIncomingCard(props) {
	// console.log(props);
	const [user, setUser] = useState({});
	useEffect(() => {
		fetch('http://localhost:3000/users')
			.then((resp) => resp.json())
			.then((data) => findNeededUser(data));
		// eslint-disable-next-line
	}, []);

	const findNeededUser = (data) => {
		let neededUser = data.find(
			(user) => user.id === props.date.alibi_1.user_id
		);
		setUser(neededUser);
	};

	const returnName = (user) => {
		if (user) {
			return <h1>{user.name}</h1>;
		}
	};
	const getemail = (user) => {
		if (user) return <h3>{user.email}</h3>;
	};

	const classes = useStyles();
	return (
		<Card className={`${classes.card} card__container`} variant="outlined">
			<CardContent>
				<Typography>
					<h2>You are obligation free!</h2>
				</Typography>

				<img src={celebrate} alt="fireworks"></img>
				<Typography gutterBottom>
					<h2>{props.date.event.occasion}</h2>
				</Typography>
				<Typography gutterBottom>With Alibi:{returnName(user)}</Typography>
				<Typography gutterBottom>
					<h2> On: {props.date.date}</h2>
				</Typography>

				{/* <Typography variant="body2" component="p">
					On: {props.date.date}
				</Typography> */}
				<Typography className={classes.pos} color="textSecondary">
					Get in touch:
				</Typography>
				<Typography gutterBottom>{getemail(user)}</Typography>
			</CardContent>
		</Card>
	);
}
