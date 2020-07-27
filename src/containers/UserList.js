import React from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { GetUserList } from "../actions/userActions";
import UserShow from "./UserShow";
import { Row, Col, Card } from 'antd';

const UserList = () => {
	const [id, setId] = React.useState()
	const dispatch = useDispatch();
	const userList = useSelector(state => state.UserList)
  React.useEffect(() => {
    FetchData()
  }, []);

	const FetchData = () => {
		dispatch(GetUserList())
	};

	const handleClick = (id) => {
		setId(id)
	}

	const showData = () => {
		if (!_.isEmpty(userList.data)){
			return(
				<div className={"list-wrapper"}>
					{userList.data.map(user => {
						return(
							<div className="site-card-border-less-wrapper">
								<Card title={user.name} bordered={false} onClick={() => handleClick(user.id)}>
									<p>{user.username}</p>
									<p>{user.email}</p>
									<p>{user.phone}</p>
									<p>{user.website}</p>
								</Card>
							</div>
						)
					})}
				</div>
			)
		}

		if (userList.loading) {
			return <p>Loading...</p>
		}

		if (userList.errorMsg !== "") {
			return <p>{userList.errorMsg}</p>
		}

		return <p>Unable to get data</p>
	}

	return (
		<>
			<Row>
				<Col span={18}>{showData()}</Col>
				<Col span={6}>{id && <UserShow id={id}></UserShow>}</Col>
			</Row>
		</>
	)
};

export default UserList;
