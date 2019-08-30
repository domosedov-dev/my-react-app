import React from "react";
import style from "./Im.module.css";
import { Dialog } from "./Dialog/Dialog";
import { Message } from "./Message/Message";

const Im = props => {
  const dialogElements = props.state.dialogs.map(el => (
    <Dialog name={el.name} id={el.id} key={el.id} />
  ));

  const messageElements = props.state.messages.map(el => (
    <Message message={el.message} key={el.id} />
  ));

  let newPostElement = React.createRef();

  const addPost = () => {
    let text = newPostElement.current.value;
    alert(text);
  };

  return (
    <div className={style.im}>
      <div className={style.dialogs}>{dialogElements}</div>

      <div className={style.chat}>
        <div className="posts__form">
          <textarea ref={newPostElement}></textarea>
          <br />
          <button onClick={addPost}>Add Post</button>
        </div>
        <hr />
        {messageElements}
      </div>
    </div>
  );
};

export default Im;
