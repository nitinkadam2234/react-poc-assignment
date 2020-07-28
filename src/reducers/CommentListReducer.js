const DefaultState = {
	loading: false,
	data: [],
	errorMsg: ""
}

const CommentListReducer = (state = DefaultState, action) => {
	switch(action.type) {
		case "COMMENT_LIST_LOADING":
			return {
				...state,
				loading: true,
			};
		case "COMMENT_LIST_SUCCESS":
			return {
				...state,
				loading: true,
				data: action.payload.data,
				errorMsg: ""
			};
		case "COMMENT_LIST_FAIL":
			return {
				...state,
				loading: false,
				errorMsg: "Unable to get posts"
			};
		default:
			return state
	}
};

export default CommentListReducer