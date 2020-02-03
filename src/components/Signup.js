import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import logged from '../actions/logged';
import user from '../actions/user';

const useStyles = makeStyles((theme) => ({
	root: {
		height: '100vh'
	},
	image: {
		backgroundImage: 'url(https://source.unsplash.com/random)',
		backgroundRepeat: 'no-repeat',
		backgroundColor:
			theme.palette.type === 'dark'
				? theme.palette.grey[900]
				: theme.palette.grey[50],
		backgroundSize: 'cover',
		backgroundPosition: 'center'
	},
	paper: {
		margin: theme.spacing(8, 4),
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

export default function Signup() {
	const classes = useStyles();
	const dispatch = useDispatch();

	const [values, setValues] = useState({
		username: '',
		password: '',
		name: '',
		email: ''
	});

	const postNewUser = () => {
		fetch('http://localhost:3000/users', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: JSON.stringify({
				user: {
					username: values.username,
					password: values.password,
					name: values.name,
					email: values.email
				}
			})
		})
			.then((r) => r.json())
			// .then((data) => console.log(data));
			.then((data) => setLogged(data));
	};

	const setLogged = (data) => {
		dispatch(logged());

		dispatch(user(data.user));
	};

	const logg = useSelector((state) => state.isLogged);
	console.log(logg);

	return (
		<Grid container component="main" className={classes.root}>
			<CssBaseline />
			<Grid item xs={false} sm={4} md={7} className={classes.image} />
			<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
				<div className={classes.paper}>
					<Typography component="h1" variant="h5">
						Create New User
					</Typography>
					<form
						className={classes.form}
						noValidate
						onSubmit={(e) => {
							e.preventDefault();
							e.persist();
							postNewUser();
						}}
					>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="email"
							label="Email Address"
							name="email"
							autoFocus
							onChange={(e) => setValues({ ...values, email: e.target.value })}
						/>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							name="username"
							label="Username"
							type="text"
							id="username"
							onChange={(e) =>
								setValues({ ...values, username: e.target.value })
							}
						/>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							name="name"
							label="Name"
							type="text"
							id="name"
							onChange={(e) => setValues({ ...values, name: e.target.value })}
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
							autoComplete="current-password"
							onChange={(e) =>
								setValues({ ...values, password: e.target.value })
							}
						/>

						<Button
							type="submit"
							fullWidth
							variant="contained"
							color="black"
							className={classes.submit}
						>
							Create Account
						</Button>
						<Grid container>
							<Grid item>
								<Link to="/login" variant="body2">
									{'Already have an account? Log in'}
								</Link>
							</Grid>
						</Grid>
					</form>
				</div>
			</Grid>
		</Grid>
	);
}
