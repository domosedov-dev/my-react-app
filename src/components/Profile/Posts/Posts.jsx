import React from "react";
import style from "./Posts.module.css";
import Post from "./Post/Post";

const Posts = (props) => {
  // const posts = [
  //   { title: "Hello", content: "Post content number 1" },
  //   { title: "News title", content: "Post content number 2" },
  //   { title: "ReactJS", content: "Post content number 3" }
  // ];

  const postsElements = props.posts.map((post, index) => {
    const { title, content } = post;
    return <Post title={title} content={content} key={index} />;
  });

  return <section className={style.posts}>{postsElements}</section>;
};

export default Posts;
