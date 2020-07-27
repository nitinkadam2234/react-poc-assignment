const DefaultState = {
	loading: false,
	userData: {},
	errorMsg: ""
}

const UserShowReducer = (state = DefaultState, action) => {
	switch(action.type) {
		case "USER_LOADING":
			return {
				...state,
				loading: true,
			};
		case "USER_SUCCESS":
			return {
				...state,
				loading: true,
				userData: action.payload,
				errorMsg: ""
			};
		case "USER_FAIL":
			return {
				...state,
				loading: false,
				errorMsg: "Unable to get user data"
			};
		default:
			return state
	}
};

export default UserShowReducer;
