import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { Row, Col, Card } from 'antd';
import { HeartFilled } from '@ant-design/icons';
import {
	RemoveFavouritePost,
	RemoveFavouriteUser,
	RemoveFavouriteComment
} from "../actions/FavouritesAction";

const Favourites = () => {
	const [isHeartOutlineActive, setHeartOutlineActive] = useState(false)
	const [isHeartFilledActive, setHeartFilledActive] = useState(true)
	const dispatch = useDispatch();
	const posts = useSelector(state => state.PostList.data);
	const users = useSelector(state => state.UserList.data)
	const comments = useSelector(state => state.CommentList.data)
	const favourites = useSelector(state => state.Favourites);
	const favouritePostIds = favourites.postIds;
	const favouriteUserIds = favourites.userIds;
	const favouriteCommentIds = favourites.commentIds;

	const removePostFromFavourites = (id) => {
		dispatch(RemoveFavouritePost(id))
		setHeartOutlineActive(!isHeartOutlineActive)
		setHeartFilledActive(!isHeartFilledActive)
	}

	const removeUserFromFavourites = (id) => {
		dispatch(RemoveFavouriteUser(id))
		setHeartOutlineActive(!isHeartOutlineActive)
		setHeartFilledActive(!isHeartFilledActive)
	}

	const removeCommentFromFavourites = (id) => {
		dispatch(RemoveFavouriteComment(id))
		setHeartOutlineActive(!isHeartOutlineActive)
		setHeartFilledActive(!isHeartFilledActive)
	}

	const showFavouritePosts = () => {
		let favPosts = posts.filter(post => favouritePostIds.includes(post.id));

		if(!_.isEmpty(favPosts)) {
			return(
				<div className={"list-wrapper"}>
					<h2>POSTS</h2>
					{favPosts.map(post => {
						return(
							<div className="site-card-border-less-wrapper">
								<Card title={post.title} bordered={false}>
									<p>{post.body}</p>
									<HeartFilled onClick={() => removePostFromFavourites(post.id)}/>
								</Card>
							</div>
						) 
					})}
				</div>
			)
		}

		return <p>No Favourite Posts.</p>
	};

	const showFavouriteUsers = () => {
		let favUsers = users.filter(post => favouriteUserIds.includes(post.id));

		if(!_.isEmpty(favUsers)) {
			return(
				<div className={"list-wrapper"}>
					<h2>USERS</h2>
					{favUsers.map(user => {
						return(
							<div className="site-card-border-less-wrapper">
								<Card title={user.name} bordered={false}>
									<p>{user.username}</p>
									<p>{user.email}</p>
									<p>{user.phone}</p>
									<p>{user.website}</p>
									<HeartFilled onClick={() => removeUserFromFavourites(user.id)}/>
								</Card>
							</div>
						) 
					})}
				</div>
			)
		}

		return <p>No Favourite Users.</p>
	};

	const showFavouriteComments = () => {
		let favComments = comments.filter(comment => favouriteCommentIds.includes(comment.id));

		if(!_.isEmpty(favComments)) {
			return(
				<div className={"list-wrapper"}>
					<h2>COMMENTS</h2>
					{favComments.map(comment => {
						return(
							<div className="site-card-border-less-wrapper">
								<Card title={comment.name} bordered={false}>
									<p>{comment.name}</p>
									<p>{comment.body}</p>
									<HeartFilled onClick={() => removeCommentFromFavourites(comment.id)}/>
								</Card>
							</div>
						) 
					})}
				</div>
			)
		}

		return <p>No Favourite Comments.</p>
	};

	return(
		<>
			<Row>
				<Col span={24}>{showFavouritePosts()}</Col>
			</Row>
			<Row>
				<Col span={24}>{showFavouriteUsers()}</Col>
			</Row>
			<Row>
				<Col span={24}>{showFavouriteComments()}</Col>
			</Row>
		</>
	)
};

export default Favourites;
