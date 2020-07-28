const DefaultState = {
	loading: false,
	commentData: {},
	errorMsg: ""
}

const CommentShowReducer = (state = DefaultState, action) => {
	switch(action.type) {
		case "COMMENT_LOADING":
			return {
				...state,
				loading: true,
			};
		case "COMMENT_SUCCESS":
			return {
				...state,
				loading: true,
				commentData: action.payload,
				errorMsg: ""
			};
		case "COMMENT_FAIL":
			return {
				...state,
				loading: false,
				errorMsg: "Unable to get comment"
			};
		default:
			return state
	}
};

export default CommentShowReducer;
