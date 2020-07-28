import { combineReducers } from "redux";
import PostListReducer from "./PostListReducer";
import PostShowReducer from "./PostShowReducer";
import UserListReducer from "./UserListReducer";
import UserShowReducer from "./UserShowReducer";
import CommentListReducer from "./CommentListReducer";
import CommentShowReducer from "./CommentShowReducer";
import FavouriteReducer from "./FavouriteReducer";

const RootReducer = combineReducers({
	PostList: PostListReducer,
	PostShow: PostShowReducer,
	UserList: UserListReducer,
	UserShow: UserShowReducer,
	CommentList: CommentListReducer,
	CommentShow: CommentShowReducer,
	Favourites: FavouriteReducer
});

export default RootReducer;
