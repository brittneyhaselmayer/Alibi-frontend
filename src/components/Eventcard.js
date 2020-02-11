import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';
import { useSelector, useDispatch } from 'react-redux';
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

export default function EventCard(props) {
	const dispatch = useDispatch();
	const classes = useStyles();
	const alibiSelected = useSelector((state) => state.alibiselect);
	const alibisInfo = useSelector((state) => state.twoAlibis);
	const currentId = useSelector((state) => state.currentUser.id);
	const [alibi, setAbili] = useState([]);
	// console.log(alibisInfo);
	// console.log(alibi.id);

	const eventId = props.event.id;

	const postPending = () => {
		dispatch(truefalsealibi());
		fetch('http://localhost:3000/pendings', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: JSON.stringify({
				pending: {
					date: alibisInfo.date,
					alibi_1_id: alibi.id,
					alibi_2_id: alibisInfo.alibi_2_id,
					event_id: eventId
				}
			})
		})
			.then((r) => r.json())
			.then((data) => console.log(data));
	};

	const findAlibi = (data) => {
		let ali = data.filter((n) => n.user_id === currentId);
		setAbili(ali[ali.length - 1]);
	};

	useEffect(() => {
		fetch('http://localhost:3000/alibis')
			.then((resp) => resp.json())
			.then((data) => findAlibi(data));
		// .then((data) => console.log(data));

		//eslint-disable-next-line
	}, []);

	return (
		<>
			{alibiSelected ? (
				<Card className={`${classes.card} card__container`} variant="outlined">
					<CardContent>
						<img
							src={props.image[`${props.event.occasion.toLowerCase()}`]}
							alt="pic"
						/>
						<Typography
							className={classes.title}
							color="textSecondary"
							gutterBottom
						></Typography>
						<Typography className={classes.pos} color="textSecondary">
							Go to:
						</Typography>
						<Typography variant="h5" component="h2">
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							{props.event.occasion}
						</Typography>

						<Typography variant="body2" component="p">
							{/* description at some point */}
						</Typography>
					</CardContent>
					<CardActions>
						<span size="small" className="button" onClick={() => postPending()}>
							Select Event
						</span>
					</CardActions>
				</Card>
			) : (
				<Card className={`${classes.card} card__container`} variant="outlined">
					<CardContent>
						<img
							src={props.image[`${props.event.occasion.toLowerCase()}`]}
							alt="this is a pic"
						/>
						<Typography
							className={classes.title}
							color="textSecondary"
							gutterBottom
						></Typography>
						<Typography className={classes.pos} color="textSecondary">
							Go to:
						</Typography>
						<Typography variant="h5" component="h2">
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							{props.event.occasion}
						</Typography>

						<Typography variant="body2" component="p">
							{/* description at some point */}
						</Typography>
					</CardContent>
				</Card>
			)}
		</>
	);
}
