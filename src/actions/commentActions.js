import axios from "axios";

export const GetCommentList = () => async dispatch => {
	try {
		dispatch({
			type: "COMMENT_LIST_LOADING"
		});

		const result = await axios.get('http://jsonplaceholder.typicode.com/comments')

		dispatch({
			type: "COMMENT_LIST_SUCCESS",
			payload: result
		});
	} catch (e) {
		dispatch({
			type: "COMMENT_LIST_FAIL"
		});
	}
};

export const GetComment = (id) => async dispatch => {

	try {
		dispatch({
			type: "COMMENT_LOADING"
		});

		const result = await axios.get(`http://jsonplaceholder.typicode.com/comments/${id}`)

		dispatch({
			type: "COMMENT_SUCCESS",
			payload: result.data,
			id: id
		});
	} catch (e) {
		dispatch({
			type: "COMMENT_FAIL"
		});
	}
};
