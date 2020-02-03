import { combineReducers } from 'redux';
import isLogged from './isLogged';
import currentUser from './currentUser';
import twoAlibis from './twoAlibis';

const allReducers = combineReducers({
	isLogged: isLogged,
	currentUser: currentUser,
	twoAlibis: twoAlibis
});

export default allReducers;
