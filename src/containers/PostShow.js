import React from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { GetPost } from "../actions/postActions";
import { Card } from 'antd';

const PostShow = (props) => {
	const id = props.id;
	const dispatch = useDispatch();
	const post = useSelector(state => state.PostShow);

  React.useEffect(() => {
    dispatch(GetPost(id))
  }, [dispatch, id]);

	const showData = () => {
		if(!_.isEmpty(post.postData)) {
			const postData = post.postData
			return(
				<div className="site-card-border-full-wrapper">
					<Card title={postData.title} bordered={false}>
						<p>{postData.title}</p>
						<p>{postData.body}</p>
					</Card>
				</div>
			)
		}

		if(post.loading) {
			return <p>Loading...</p>
		}

		if(post.errorMsg !== "") {
			return <p>{post.errorMsg}</p>
		}

		return <p>unable to get data</p>
	};

	return(
		<div>
			{showData()}
		</div>
	)
};

export default PostShow;
