import React from "react";
import style from "./Posts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";
import { maxLength, required } from "../../../utils/validators/validators";
import {Input, Textarea} from "../../common/FormControls/formControls";

// Custom validators
const maxLength20 = maxLength(20);

const Posts = props => {
  const postsElements = props.posts.map(post => {
    const { title, content, id } = post;
    return <Post title={title} content={content} key={id} />;
  });

  // On submit form handle
  const addPost = values => {
    props.addPost(values);
  };

  return (
    <section className={style.posts}>
      <AddPostForm onSubmit={addPost} />
      <hr />
      {postsElements}
    </section>
  );
};

let AddPostForm = props => {
  return (
    <form onSubmit={props.handleSubmit} className="posts__form">
      <Field
        component={Input}
        name={"title"}
        validate={[required, maxLength20]}
      />
      <br />
      <Field
        component={Textarea}
        name={"content"}
        validate={[required, maxLength20]}
        placeholder={"Post Content"}
      />
      <br />
      <button>Add Post</button>
    </form>
  );
};

AddPostForm = reduxForm({
  form: "Profile/Posts/AddPost"
})(AddPostForm);

export default Posts;
