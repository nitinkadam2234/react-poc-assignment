import React from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { GetCommentList } from "../actions/commentActions";
import CommentShow from "./CommentShow";
import { Row, Col, Card, Input } from 'antd';
const { Search } = Input;

const CommentList = () => {
	const [id, setId] = React.useState()
	const [filteredComments, setFilteredComments] = React.useState([])
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

	const onSearchInputChange = (value) => {
		let comments =  commentList.data.filter( comment => 
			comment.name.toLowerCase().includes(value.toLowerCase())
		);
		setFilteredComments(comments)
	}

	const showData = () => {
		let comments = _.isEmpty(filteredComments) ? commentList.data : filteredComments;

		if(!_.isEmpty(comments)) {
			return(
				<div className={"list-wrapper"}>
					<Search placeholder="Please search comment(s) by name" onSearch={value => onSearchInputChange(value)} enterButton />
					{comments.map(comment => {
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
