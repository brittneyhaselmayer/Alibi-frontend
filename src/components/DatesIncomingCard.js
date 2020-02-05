import React from 'react';
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

export default function DatesIncomingCard() {
	const classes = useStyles();
	return (
		<div>
			<div> YOU ACCEPTED!!</div>
			<Card className={classes.card} variant="outlined">
				<CardContent>
					<Typography
						className={classes.title}
						color="textSecondary"
						gutterBottom
					>
						Event
					</Typography>
					<Typography className={classes.pos} color="textSecondary">
						Go to:
					</Typography>
					<Typography variant="h5" component="h2">
						{/* {props.event.occasion} */}
					</Typography>

					<Typography variant="body2" component="p">
						description at some point
					</Typography>
				</CardContent>
			</Card>
		</div>
	);
}
