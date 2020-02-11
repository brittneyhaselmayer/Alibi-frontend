import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';

import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import logged from '../actions/logged';
import user from '../actions/user';

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1)
	},
	submit: {
		margin: theme.spacing(3, 0, 2)
	}
}));

export default function SignIn() {
	const classes = useStyles();
	const dispatch = useDispatch();

	const [values, setValues] = useState({
		username: '',
		password: ''
	});

	const [correct, setCorrect] = useState(false);

	const getUser = () => {
		fetch('http://localhost:3000/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: JSON.stringify({
				user: {
					username: values.username,
					password: values.password
				}
			})
		})
			.then((r) => r.json())
			// .then((data) => setLogged(data))
			// .then((data) => console.log(data))
			.then((obj) => {
				if (obj.message === 'Invalid username or password') {
					handleIncorrect();
				} else {
					setLogged(obj);
				}
			});
		// .then(() => setLogged());
		// .then((data) => console.log(data));
	};

	// const logg = useSelector((state) => state.isLogged);
	// console.log(logg);
	const setLogged = (data) => {
		dispatch(logged());
		// console.log(data);
		dispatch(user(data.user));
	};

	const handleIncorrect = () => {
		setCorrect(!correct);
	};

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Typography component="h1" variant="h5">
					Sign in
				</Typography>
				<form
					className={classes.form}
					noValidate
					onSubmit={(e) => {
						e.preventDefault();
						e.persist();
						getUser();
					}}
				>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="username"
						label="Username"
						name="username"
						autoFocus
						onChange={(e) => setValues({ ...values, username: e.target.value })}
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						onChange={(e) => setValues({ ...values, password: e.target.value })}
					/>
					<Typography>
						{correct ? <h3>Incorrect Login</h3> : <div></div>}
					</Typography>

					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="default"
						className={classes.submit}
					>
						Sign In
					</Button>
					<Grid container>
						<Grid item>
							<Link to="/" variant="body2">
								{"Don't have an account? Sign Up"}
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>
		</Container>
	);
}
