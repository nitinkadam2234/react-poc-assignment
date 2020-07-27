export const AddFavouritePost = (id) => async dispatch => {
	dispatch({
		type: "ADD_FAVOURITE_POST",
		payload: id
	});
};

export const RemoveFavouritePost = (id) => async dispatch => {
	dispatch({
		type: "REMOVE_FAVOURITE_POST",
		payload: id
	});
};

export const AddFavouriteUser = (id) => async dispatch => {
	dispatch({
		type: "ADD_FAVOURITE_USER",
		payload: id
	});
};

export const RemoveFavouriteUser = (id) => async dispatch => {
	dispatch({
		type: "REMOVE_FAVOURITE_USER",
		payload: id
	});
};

export const AddFavouriteComment = (id) => async dispatch => {
	dispatch({
		type: "ADD_FAVOURITE_COMMENT",
		payload: id
	});
};

export const RemoveFavouriteComment = (id) => async dispatch => {
	dispatch({
		type: "REMOVE_FAVOURITE_COMMENT",
		payload: id
	});
};
