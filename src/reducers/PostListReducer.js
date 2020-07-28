import _ from "lodash";

const DefaultState = {
	loading: false,
	data: [],
	errorMsg: ""
}

const PostListReducer = (state = DefaultState, action) => {
	switch(action.type) {
		case "POST_LIST_LOADING":
			return {
				...state,
				loading: true,
			};
		case "POST_LIST_SUCCESS":
			return {
				...state,
				loading: true,
				data: _.orderBy(action.payload.data, ['id'],['desc']),
				errorMsg: ""
			};
		case "POST_LIST_FAIL":
			return {
				...state,
				loading: false,
				errorMsg: "Unable to get posts"
			};
		default:
			return state
	}
};

export default PostListReducer