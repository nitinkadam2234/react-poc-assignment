import React from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { GetUser } from "../actions/userActions";
import { Card } from 'antd';

const UserShow = (props) => {
	const id = props.id;
	const dispatch = useDispatch();
	const user = useSelector(state => state.UserShow);

  React.useEffect(() => {
    dispatch(GetUser(id))
  }, [dispatch, id]);

	const showData = () => {
		if(!_.isEmpty(user.userData)) {
			const userData = user.userData
			return(
				<div className="site-card-border-full-wrapper">
					<Card title={userData.name} bordered={false}>
						<p>{userData.email}</p>
						<p>{userData.phone}</p>
						<p>{userData.website}</p>
					</Card>
				</div>
			)
		}

		if(user.loading) {
			return <p>Loading...</p>
		}

		if(user.errorMsg !== "") {
			return <p>{user.errorMsg}</p>
		}

		return <p>unable to get data</p>
	};

	return(
		<div>
			{showData()}
		</div>
	)
};

export default UserShow;
