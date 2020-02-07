import { combineReducers } from 'redux';
import isLogged from './isLogged';
import currentUser from './currentUser';
import twoAlibis from './twoAlibis';
import alibiselect from './alibiselect';
import isAlibi from './isAlibi2';

const allReducers = combineReducers({
	isLogged: isLogged,
	currentUser: currentUser,
	twoAlibis: twoAlibis,
	alibiselect: alibiselect,
	isAlibi: isAlibi
});

export default allReducers;
