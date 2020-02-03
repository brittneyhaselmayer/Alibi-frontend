const userinfo = { id: 0, username: '', email: '', name: '' };

const currentUser = (state = userinfo, action) => {
	switch (action.type) {
		case 'SET':
			// console.log(action.payload);

			return {
				...state,
				name: action.payload.name,
				id: action.payload.id,
				email: action.payload.email,
				username: action.payload.username
			};
		default:
			return state;
	}
};

export default currentUser;
