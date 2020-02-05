const twoAlibis = (
	state = { alibi_1_id: 0, alibi_2_id: 0, date: '', chosenAlibi: '' },
	action
) => {
	switch (action.type) {
		case 'STOREALIBIS':
			return {
				...state,
				alibi_1_id: action.payload.alibi_1_id,
				alibi_2_id: action.payload.alibi_2_id,
				date: action.payload.date,
				chosenAlibi: action.payload.chosenAlibi
			};
		default:
			return state;
	}
};

export default twoAlibis;
