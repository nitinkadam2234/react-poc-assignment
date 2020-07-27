import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { GetPostList } from "../actions/postActions";
import PostShow from "./PostShow";
import { Row, Col, Card, Input } from 'antd';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import { AddFavouritePost, RemoveFavouritePost } from "../actions/FavouritesAction";
const { Search } = Input;

const PostList = () => {
	const [id, setId] = useState()
	const [isHeartOutlineActive, setHeartOutlineActive] = useState(true)
	const [isHeartFilledActive, setHeartFilledActive] = useState(false)
	const [filteredPosts, setFilteredPosts] = useState([])
	const dispatch = useDispatch();
	const postList = useSelector(state => state.PostList);
	const favouritePostIds = useSelector(state => state.Favourites.postIds);

  useEffect(() => {
		dispatch(GetPostList())
  }, []);

	const handleClick = (id) => {
		setId(id)
	}

	const addToFavourites = (id) => {
		dispatch(AddFavouritePost(id))
		setHeartOutlineActive(!isHeartOutlineActive)
		setHeartFilledActive(!isHeartFilledActive)
	}

	const removeFromFavourites = (id) => {
		dispatch(RemoveFavouritePost(id))
		setHeartOutlineActive(!isHeartOutlineActive)
		setHeartFilledActive(!isHeartFilledActive)
	}

	const onSearchInputChange = (value) => {
		var posts =  postList.data.filter( post => 
			post.title.toLowerCase().includes(value.toLowerCase())
		);
		setFilteredPosts(posts)
	}

	const showData = () => {
		let posts = _.isEmpty(filteredPosts) ? postList.data : filteredPosts;

		if(!_.isEmpty(posts)) {
			return(
				<div className={"list-wrapper"}>
					<Search placeholder="Please search post(s) by content" onSearch={value => onSearchInputChange(value)} enterButton />
					{posts.map(post => {
						return(
							<div className="site-card-border-less-wrapper">
								<Card title={post.title} bordered={false} onClick={() => handleClick(post.id)}>
									<p>{post.id}</p>
									<p>{post.body}</p>
									{ 
										favouritePostIds.includes(post.id)
										?
										<HeartFilled onClick={() => removeFromFavourites(post.id)}/>
										:
										<HeartOutlined onClick={() => addToFavourites(post.id)}/>
									}
								</Card>
							</div>
						)
					})}
				</div>
			)
		}

		if(postList.loading) {
			return <p>Loading...</p>
		}

		if(postList.errorMsg !== "") {
			return <p>{postList.errorMsg}</p>
		}

		return <p>unable to get data</p>
	};

	return(
		<>
			<Row>
				<Col span={18}>{showData()}</Col>
				<Col span={6}>{id && <PostShow id={id}></PostShow>}</Col>
			</Row>
		</>
	)
};

export default PostList;
