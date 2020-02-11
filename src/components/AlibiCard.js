import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';
import { useSelector, useDispatch } from 'react-redux';
import storeAlibis from '../actions/storeAlibis';
import truefalsealibi from '../actions/alibiselect';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';
import img6 from '../assets/img6.jpg';
import img7 from '../assets/img7.jpg';
import img8 from '../assets/img8.jpg';
import img9 from '../assets/img9.jpg';
import img10 from '../assets/img10.jpg';
import img11 from '../assets/img11.jpg';
import img12 from '../assets/img12.jpg';
import img13 from '../assets/img13.jpg';
import img14 from '../assets/img14.jpg';
import img15 from '../assets/img15.jpg';
import img16 from '../assets/img16.jpg';
import img17 from '../assets/img17.jpg';

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

	// const currentUser = useSelector((state) => state.currentUser.id);
	// console.log(currentUser);

	const randomImages = [
		img1,
		img2,
		img3,
		img4,
		img5,
		img6,
		img7,
		img8,
		img9,
		img10,
		img11,
		img12,
		img13,
		img14,
		img15,
		img16,
		img17
	];

	const selectedRandomImage = () => {
		const randomImage =
			randomImages[Math.floor(Math.random() * randomImages.length)];
		return <img src={randomImage} alt="pic"></img>;
	};

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
		<>
			{alibi ? (
				<Card className={`${classes.card} card__container`} variant="outlined">
					<CardContent>
						{selectedRandomImage()}
						<Typography variant="h5" component="h2" gutterBottom>
							{props.alibi.user.name}
						</Typography>
						<Typography className={classes.pos} color="black">
							Needs an Alibi on
						</Typography>
						{/* <Typography variant="h5" component="h2">
							{props.alibi.user.name}
						</Typography> */}
						<Typography variant="h5" component="h2">
							{props.alibi.when}
						</Typography>

						<Typography variant="body2" component="p">
							{/* description at some point */}
						</Typography>
					</CardContent>
					<CardActions>
						<span
							onClick={() => storeAlibisInRedux()}
							size="small"
							className="button"
						>{`Pick ${props.alibi.user.name} as an Alibi`}</span>
					</CardActions>
				</Card>
			) : (
				<></>
			)}
		</>
	);
}
