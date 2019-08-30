import React from "react";
import style from "./Posts.module.css";
import Post from "./Post/Post";

const Posts = (props) => {

  const postsElements = props.posts.map((post, index) => {
    const { title, content } = post;
    return <Post title={title} content={content} key={index} />;
  });

  return <section className={style.posts}>{postsElements}</section>;
};

export default Posts;
