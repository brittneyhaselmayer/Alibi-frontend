const user = (userObj) => {
	return {
		type: 'SET',
		payload: userObj
	};
};

export default user;
