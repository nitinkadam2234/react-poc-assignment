import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { Row, Col, Card } from 'antd';
import queryString from 'query-string';
import { GetUserList } from "../actions/userActions";
import { GetPostList } from "../actions/postActions";
import { GetCommentList } from "../actions/commentActions";

const SearchList = (props) => {
	let value = queryString.parse(props.location.search).query

	const dispatch = useDispatch();
	const userList = useSelector(state => state.UserList)
	const postList = useSelector(state => state.PostList)
	const commentList = useSelector(state => state.CommentList)

	useEffect(() => {
		dispatch(GetUserList());
		dispatch(GetPostList());
		dispatch(GetCommentList());
	}, []);

	const showUsersData = () => {
		const users =  userList.data.filter( user => 
			user.name.toLowerCase().includes(value.toLowerCase())
		);

		if (!_.isEmpty(users)){
			return(
				<div className={"list-wrapper"}>
					{users.map(user => {
						return(
							<div className="site-card-border-less-wrapper">
								<Card title={user.name} bordered={false}>
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

		return <p>No Record found.</p>
	}

	const showPostsData = () => {
		const posts =  postList.data.filter( post => 
			post.title.toLowerCase().includes(value.toLowerCase())
		);

		if (!_.isEmpty(posts)){
			return(
				<div className={"list-wrapper"}>
					{posts.map(post => {
						return(
							<div className="site-card-border-less-wrapper">
								<Card title={post.title} bordered={false}>
									<p>{post.id}</p>
									<p>{post.body}</p>
								</Card>
							</div>
						)
					})}
				</div>
			)
		}

		return <p>No Record found.</p>
	}

	const showCommentsData = () => {
		const comments =  commentList.data.filter( comment => 
			comment.name.toLowerCase().includes(value.toLowerCase())
		);

		if (!_.isEmpty(comments)){
			return(
				<div className={"list-wrapper"}>
					{comments.map(comment => {
						return(
							<div className="site-card-border-less-wrapper">
								<Card title={comment.name} bordered={false}>
									<p>{comment.name}</p>
									<p>{comment.body}</p>
								</Card>
							</div>
						)
					})}
				</div>
			)
		}

		return <p>No Record found.</p>
	}

	return (
		<>
			<Row>
				<h2>Users</h2>
				<Col span={24}>{showUsersData()}</Col>
			</Row>

			<Row>
				<h2>Posts</h2>
				<Col span={24}>{showPostsData()}</Col>
			</Row>

			<Row>
				<h2>Comments</h2>
				<Col span={24}>{showCommentsData()}</Col>
			</Row>
		</>
	)
};

export default SearchList;
