import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator
} from "../../../redux/profile-reducer";
import Posts from "./Posts";

const PostsContainer = props => {
  const state = props.store.getState();

  const onPostChange = text => {
    props.store.dispatch(updateNewPostTextActionCreator(text));
  };

  const addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  return (
    <Posts
      posts={state.profilePage.posts}
      newPostText={state.profilePage.newPostText}
      updateNewPostText={onPostChange}
      addPost={addPost}
    />
  );
};

export default PostsContainer;
