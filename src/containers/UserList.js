import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { GetUserList } from "../actions/userActions";
import UserShow from "./UserShow";
import { Row, Col, Card, Input } from 'antd';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import { AddFavouriteUser, RemoveFavouriteUser } from "../actions/FavouritesAction";
const { Search } = Input;

const UserList = () => {
	const [id, setId] = React.useState()
	const [isHeartOutlineActive, setHeartOutlineActive] = useState(true)
	const [isHeartFilledActive, setHeartFilledActive] = useState(false)
	const [filteredUsers, setFilteredUsers] = React.useState([])
	const dispatch = useDispatch();
	const userList = useSelector(state => state.UserList)
	const favouriteUserIds = useSelector(state => state.Favourites.userIds);

  React.useEffect(() => {
    FetchData()
  }, [FetchData]);

	const FetchData = () => {
		dispatch(GetUserList());
	};

	const handleClick = (id) => {
		setId(id);
	}

	const addToFavourites = (id) => {
		dispatch(AddFavouriteUser(id))
		setHeartOutlineActive(!isHeartOutlineActive)
		setHeartFilledActive(!isHeartFilledActive)
	}

	const removeFromFavourites = (id) => {
		dispatch(RemoveFavouriteUser(id))
		setHeartOutlineActive(!isHeartOutlineActive)
		setHeartFilledActive(!isHeartFilledActive)
	}

	const onSearchInputChange = (value) => {
		let users =  userList.data.filter( user => 
			user.name.toLowerCase().includes(value.toLowerCase())
		);

		setFilteredUsers(users);
	}

	const showData = () => {
		let users = _.isEmpty(filteredUsers) ? userList.data : filteredUsers;

		if (!_.isEmpty(users)){
			return(
				<div className={"list-wrapper"}>
					<Search placeholder="Please search user(s) by name" onSearch={value => onSearchInputChange(value)} enterButton />
					{users.map(user => {
						return(
							<div className="site-card-border-less-wrapper">
								<Card title={user.name} bordered={false} onClick={() => handleClick(user.id)}>
									<p>{user.username}</p>
									<p>{user.email}</p>
									<p>{user.phone}</p>
									<p>{user.website}</p>
									{
										favouriteUserIds.includes(user.id)
										?
										<HeartFilled onClick={() => removeFromFavourites(user.id)}/>
										:
										<HeartOutlined onClick={() => addToFavourites(user.id)}/>
									}
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
