import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import logged from '../actions/logged';
import user from '../actions/user';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		flexGrow: 1
	}
}));

export default function Nav() {
	const classes = useStyles();
	const logg = useSelector((state) => state.isLogged);
	const dispatch = useDispatch();

	const clearuser = { id: 0, username: '', name: '', email: '' };

	const logOut = () => {
		dispatch(logged());
		dispatch(user(clearuser));
	};

	return (
		// <div className={classes.root}>
		// 	<AppBar position="static" color="blue">
		// 		<Toolbar>
		// 			<Typography variant="h6" className={classes.title}>
		// 				<strong>ALIBI</strong>
		// 			</Typography>

		// 			<Link to="/">
		// 				<Button color="inherit">Log out</Button>
		// 			</Link>
		// 			<Link to="/login">
		// 				<Button color="inherit">Login</Button>
		// 			</Link>
		// 			<Link to="/">
		// 				<Button color="inherit">Sign up</Button>
		// 			</Link>
		// 		</Toolbar>
		// 	</AppBar>
		// </div>

		<div>
			{logg ? (
				<div className={classes.root}>
					<AppBar position="static" color="blue">
						<Toolbar>
							<Typography variant="h6" className={classes.title}>
								<strong>ALIBI</strong>
							</Typography>

							<Link to="/">
								<Button color="inherit" onClick={() => logOut()}>
									Log out
								</Button>
							</Link>
						</Toolbar>
					</AppBar>
				</div>
			) : (
				<div className={classes.root}>
					<AppBar position="static" color="blue">
						<Toolbar>
							<Typography variant="h6" className={classes.title}>
								<strong>ALIBI</strong>
							</Typography>

							<Link to="/login">
								<Button color="inherit">Login</Button>
							</Link>
							<Link to="/">
								<Button color="inherit">Sign up</Button>
							</Link>
						</Toolbar>
					</AppBar>
				</div>
			)}
		</div>
	);
}
