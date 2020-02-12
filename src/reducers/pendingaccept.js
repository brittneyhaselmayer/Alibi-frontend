const pendingaccept = (state = false, action) => {
	switch (action.type) {
		case 'FLIP':
			return !state;

		default:
			return state;
	}
};
export default pendingaccept;
