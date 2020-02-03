import { combineReducers } from 'redux';
import isLogged from './isLogged';
import currentUser from './currentUser';

const allReducers = combineReducers({
	isLogged: isLogged,
	currentUser: currentUser
});

export default allReducers;
