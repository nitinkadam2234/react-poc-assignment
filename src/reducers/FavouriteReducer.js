const DefaultState = {
	postIds: [],
	userIds: [],
	commentIds: []
};

const FavouriteReducer = (state = DefaultState, action) => {
	switch(action.type) {
		case "ADD_FAVOURITE_POST":
			var existingPostIds = state.postIds;
			existingPostIds.push(action.payload)

			return {
				...state,
				postIds: existingPostIds
			};
		case "REMOVE_FAVOURITE_POST":
			var ids = state.postIds.filter((id)=> id != action.payload)

			return {
				...state,
				postIds: ids
			};
		case "ADD_FAVOURITE_USER":
			var existingUserIds = state.userIds;
			existingUserIds.push(action.payload)

			return {
				...state,
				userIds: existingUserIds
			};
		case "REMOVE_FAVOURITE_USER":
			var ids = state.userIds.filter((id)=> id != action.payload)

			return {
				...state,
				userIds: ids
			};
		case "ADD_FAVOURITE_COMMENT":
			var existingCommentIds = state.commentIds;
			existingCommentIds.push(action.payload)

			return {
				...state,
				commentIds: existingCommentIds
			};
		case "REMOVE_FAVOURITE_COMMENT":
			var ids = state.commentIds.filter((id)=> id != action.payload)

			return {
				...state,
				commentIds: ids
			};
		default:
			return state
	}
};

export default FavouriteReducer;
