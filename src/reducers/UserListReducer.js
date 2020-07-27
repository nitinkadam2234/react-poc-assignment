const DefaultState = {
	loading: false,
	data: [],
	errorMsg: ""
}

const UserListReducer = (state = DefaultState, action) => {
	switch(action.type) {
		case "USER_LIST_LOADING":
			return {
				...state,
				loading: true
			};
		case "USER_LIST_SUCCESS":
			return {
				...state,
				loading: true,
				data: action.payload.data,
				errorMsg: ""
			};
		case "USER_LIST_FAIL":
			return {
				...state,
				loading: false,
				errorMsg: "Unable to get data"
			};
		default:
			return state
	}
}

export default UserListReducer;
