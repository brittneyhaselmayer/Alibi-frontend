import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useSelector, useDispatch } from 'react-redux';
import storeAlibis from '../actions/storeAlibis';
import truefalsealibi from '../actions/alibiselect';

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

export default function AlibiCard(props) {
	const classes = useStyles();
	const dispatch = useDispatch();
	const alibi = useSelector((state) => state.isAlibi);
	// console.log(props);

	const currentUser = useSelector((state) => state.currentUser.id);
	// console.log(currentUser);

	const users = {
		alibi_1_id: 0,
		alibi_2_id: props.alibi.id,
		date: props.alibi.when,
		chosenAlibi: props.alibi.user.name
	};
	// console.log(props.alibi.user.id);
	const storeAlibisInRedux = () => {
		dispatch(storeAlibis(users));
		dispatch(truefalsealibi());
	};

	return (
		<div>
			{alibi ? (
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
							{props.alibi.user.name}
						</Typography>
						<Typography variant="h5" component="h2">
							{props.alibi.when}
						</Typography>

						<Typography variant="body2" component="p">
							description at some point
						</Typography>
					</CardContent>
					<CardActions>
						<Button
							onClick={() => storeAlibisInRedux()}
							size="small"
						>{`Pick ${props.alibi.user.name} as an Alibi`}</Button>
					</CardActions>
				</Card>
			) : (
				<div></div>
			)}
		</div>
	);
}
