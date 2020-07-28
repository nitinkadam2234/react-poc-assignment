import axios from "axios";

export const GetPostList = () => async dispatch => {
	try {
		dispatch({
			type: "POST_LIST_LOADING"
		});

		const result = await axios.get('http://jsonplaceholder.typicode.com/posts')

		dispatch({
			type: "POST_LIST_SUCCESS",
			payload: result
		});
	} catch (e) {
		dispatch({
			type: "POST_LIST_FAIL"
		});
	}
};

export const GetPost = (id) => async dispatch => {

	try {
		dispatch({
			type: "POST_LOADING"
		});

		const result = await axios.get(`http://jsonplaceholder.typicode.com/posts/${id}`)

		dispatch({
			type: "POST_SUCCESS",
			payload: result.data,
			id: id
		});
	} catch (e) {
		dispatch({
			type: "POST_FAIL"
		});
	}
};
