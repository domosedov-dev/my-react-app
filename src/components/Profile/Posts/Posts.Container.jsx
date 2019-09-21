import {
  addPostActionCreator,
} from "../../../redux/profile-reducer";
import Posts from "./Posts";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addPost: (newPostObject) => {
      dispatch(addPostActionCreator(newPostObject));
    }
  };
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;
