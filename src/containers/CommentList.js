import React from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { GetCommentList } from "../actions/commentActions";
import CommentShow from "./CommentShow";
import { Row, Col, Card } from 'antd';

const CommentList = () => {
	const [id, setId] = React.useState()
	const dispatch = useDispatch();
	const commentList = useSelector(state => state.CommentList);
  React.useEffect(() => {
    FetchData()
  }, []);

	const FetchData = () => {
		dispatch(GetCommentList())
	};

	const handleClick = (id) => {
		setId(id)
	}

	const showData = () => {
		if(!_.isEmpty(commentList.data)) {
			return(
				<div className={"list-wrapper"}>
					{commentList.data.map(comment => {
						return(
							<div className="site-card-border-full-wrapper">
								<Card title={comment.name} bordered={false} onClick={() => handleClick(comment.id)}>
									<p>{comment.name}</p>
									<p>{comment.body}</p>
								</Card>
							</div>
						) 
					})}
				</div>
			)
		}

		if(commentList.loading) {
			return <p>Loading...</p>
		}

		if(commentList.errorMsg !== "") {
			return <p>{commentList.errorMsg}</p>
		}

		return <p>unable to get data</p>
	};

	return(
		<>
			<Row>
				<Col span={18}>{showData()}</Col>
				<Col span={6}>{id && <CommentShow id={id}></CommentShow>}</Col>
			</Row>
		</>
	)
};

export default CommentList;
