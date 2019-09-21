import React from "react";
import style from "./Im.module.css";
import { Dialog } from "./Dialog/Dialog";
import { Message } from "./Message/Message";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../common/FormControls/formControls";
import {maxLength, required} from "../../utils/validators/validators";

const maxLength50 = maxLength(50);

const Im = props => {
  const dialogElements = props.dialogs.map(el => (
    <Dialog name={el.name} id={el.id} key={el.id} />
  ));

  const messageElements = props.messages.map(el => (
    <Message message={el.message} key={el.id} />
  ));

  const addNewMessage = values => {
    console.log(values.newMessageText);
    props.addMessage(values.newMessageText);
  };

  if (!props.isAuth) return <Redirect to={"/login"} />;

  return (
    <div className={style.im}>
      <div className={style.dialogs}>{dialogElements}</div>
      <div className={style.chat}>
        <AddMessageForm onSubmit={addNewMessage} />
        <hr />
        {messageElements}
      </div>
    </div>
  );
};

let AddMessageForm = props => {
  return (
    <form onSubmit={props.handleSubmit} className="posts__form">
      <Field
        validate={[required, maxLength50]}
        component={Textarea}
        name={"newMessageText"}
        placeholder={"Enter your message"}
      />
      <br />
      <button>Add Post</button>
    </form>
  );
};

AddMessageForm = reduxForm({
  form: "Im/addMessage"
})(AddMessageForm);

export default Im;
