import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';
import { useSelector, useDispatch } from 'react-redux';

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
		let neededUser = data.find((user) => user.id === props.date.alibi_1_id);
		setUser(neededUser);
	};

	const returnName = (user) => {
		if (user) {
			return <h1>{user.name}</h1>;
		}
	};

	const classes = useStyles();
	return (
		<div>
			<div> YOU ACCEPTED!!</div>
			<Card className={classes.card} variant="outlined">
				<CardContent>
					<Typography gutterBottom>{returnName(user)}</Typography>
					<Typography className={classes.pos} color="textSecondary">
						Go to:
					</Typography>
					<Typography variant="h5" component="h2">
						{props.date.event.occasion}
					</Typography>

					<Typography variant="body2" component="p">
						On: {props.date.date}
					</Typography>
				</CardContent>
			</Card>
		</div>
	);
}
