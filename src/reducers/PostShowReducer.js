const DefaultState = {
	loading: false,
	postData: {},
	errorMsg: ""
}

const PostShowReducer = (state = DefaultState, action) => {
	switch(action.type) {
		case "POST_LOADING":
			return {
				...state,
				loading: true,
			};
		case "POST_SUCCESS":
			return {
				...state,
				loading: true,
				postData: action.payload,
				errorMsg: ""
			};
		case "POST_FAIL":
			return {
				...state,
				loading: false,
				errorMsg: "Unable to get post"
			};
		default:
			return state
	}
};

export default PostShowReducer;
