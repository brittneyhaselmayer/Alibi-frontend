import { combineReducers } from 'redux';
import isLogged from './isLogged';
import currentUser from './currentUser';
import twoAlibis from './twoAlibis';
import alibiselect from './alibiselect';

const allReducers = combineReducers({
	isLogged: isLogged,
	currentUser: currentUser,
	twoAlibis: twoAlibis,
	alibiselect: alibiselect
});

export default allReducers;
