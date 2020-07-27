import React from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { GetPostList } from "../actions/postActions";
import PostShow from "./PostShow";
import { Row, Col, Card, Input } from 'antd';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
const { Search } = Input;

const PostList = () => {
	const [id, setId] = React.useState()
	const [isHeartOutlineActive, setHeartOutlineActive] = React.useState(true)
	const [isHeartFilledActive, setHeartFilledActive] = React.useState(false)
	const [filteredPosts, setFilteredPosts] = React.useState([])
	const dispatch = useDispatch();
	const postList = useSelector(state => state.PostList);
  React.useEffect(() => {
    FetchData()
  }, []);

	const FetchData = () => {
		dispatch(GetPostList())
	};

	const handleClick = (id) => {
		setId(id)
	}

	const handleFavClick = () => {
		setHeartOutlineActive(!isHeartOutlineActive)
		setHeartFilledActive(!isHeartFilledActive)
	}

	const onSearchInputChange = (value) => {
		let posts =  postList.data.filter( post => 
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
									<p>{post.body}</p>
									{ isHeartOutlineActive && <HeartOutlined onClick={() => handleFavClick()}/>}
									{ isHeartFilledActive && <HeartFilled onClick={() => handleFavClick()}/>}
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
