import axios from "axios";

export const GetUserList = () => async dispatch => {
	try {
		dispatch({
			type: 'USER_LIST_LOADING'
		});

		const result = await axios.get('http://jsonplaceholder.typicode.com/users')

		dispatch({
			type: 'USER_LIST_SUCCESS',
			payload: result
		});
	} catch (e) {
		dispatch({
			type: 'USER_LIST_FAIL'
		});
	}
}

export const GetUser = (id) => async dispatch => {
	try {
		dispatch({
			type: "USER_LOADING"
		});

		const result = await axios.get(`http://jsonplaceholder.typicode.com/users/${id}`)

		dispatch({
			type: "USER_SUCCESS",
			payload: result.data,
			id: id
		});
	} catch (e) {
		dispatch({
			type: "USER_FAIL"
		});
	}
};

