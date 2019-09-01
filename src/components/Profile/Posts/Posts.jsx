import React from "react";
import style from "./Posts.module.css";
import Post from "./Post/Post";

const Posts = props => {
  const postsElements = props.posts.map(post => {
    const { title, content, id } = post;
    return <Post title={title} content={content} key={id} />;
  });

  let newPostElement = React.createRef();

  const onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch({type: 'UPDATE-NEW_POST_TEXT', text});
  };

  const addPost = () => {
    props.dispatch({type: 'ADD-POST'});
  };

  return (
    <section className={style.posts}>
      <div className="posts__form">
        <textarea
          onChange={onPostChange}
          ref={newPostElement}
          value={props.newPostText}
        />
        <br />
        <button onClick={addPost}>Add Post</button>
      </div>
      <hr />
      {postsElements}
    </section>
  );
};

export default Posts;
