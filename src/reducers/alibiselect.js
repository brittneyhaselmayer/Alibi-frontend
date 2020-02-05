const alibiselect = (state = false, action) => {
	switch (action.type) {
		case 'TRUEFALSE':
			return !state;

		default:
			return state;
	}
};
export default alibiselect;
