import React from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { GetComment } from "../actions/commentActions";
import { Card } from 'antd';

const CommentShow = (props) => {
	const id = props.id;
	const dispatch = useDispatch();
	const comment = useSelector(state => state.CommentShow);

  React.useEffect(() => {
    dispatch(GetComment(id))
  }, [dispatch, id]);

	const showData = () => {
		if(!_.isEmpty(comment.commentData)) {
			const commentData = comment.commentData
			return(
				<div className="site-card-border-full-wrapper">
					<Card title={commentData.name} bordered={false}>
						<p>{commentData.body}</p>
					</Card>
				</div>
			)
		}

		if(comment.loading) {
			return <p>Loading...</p>
		}

		if(comment.errorMsg !== "") {
			return <p>{comment.errorMsg}</p>
		}

		return <p>unable to get data</p>
	};

	return(
		<div>
			{showData()}
		</div>
	)
};

export default CommentShow;
