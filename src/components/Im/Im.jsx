import React from "react";
import style from "./Im.module.css";
import { Dialog } from "./Dialog/Dialog";
import { Message } from "./Message/Message";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/Store";

const Im = props => {
  const dialogElements = props.state.dialogs.map(el => (
    <Dialog name={el.name} id={el.id} key={el.id} />
  ));

  const messageElements = props.state.messages.map(el => (
    <Message message={el.message} key={el.id} />
  ));

  let newMessageElement = React.createRef();

  const addMessage = () => {
    props.dispatch(addMessageActionCreator());
  };

  const onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.dispatch(updateNewMessageTextActionCreator(text));
  };

  return (
    <div className={style.im}>
      <div className={style.dialogs}>{dialogElements}</div>

      <div className={style.chat}>
        <div className="posts__form">
          <textarea onChange={onMessageChange} ref={newMessageElement} value={props.state.newMessageText}/>
          <br />
          <button onClick={addMessage}>Add Post</button>
        </div>
        <hr />
        {messageElements}
      </div>
    </div>
  );
};

export default Im;
