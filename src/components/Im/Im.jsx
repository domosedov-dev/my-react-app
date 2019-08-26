import React from "react";
import style from "./Im.module.css";
import { Dialog } from "./Dialog/Dialog";
import { Message } from "./Message/Message";

const Im = props => {
  const dialogs = [
    { id: 1, name: "Sasha" },
    { id: 2, name: "Sonya" },
    { id: 3, name: "Svyatik" },
    { id: 4, name: "Vladik" },
    { id: 5, name: "React" }
  ];

  const messages = [
    { id: 1, message: "Hi!" },
    { id: 2, message: "Hi!" },
    { id: 3, message: "How are you?" },
    { id: 4, message: "Fine!" }
  ];

  const dialogElements = dialogs.map(el => (
    <Dialog name={el.name} id={el.id} key={el.id} />
  ));

  const messageElements = messages.map(el => (
    <Message message={el.message} key={el.id} />
  ));

  return (
    <div className={style.im}>
      <div className={style.dialogs}>{dialogElements}</div>
      <div className={style.chat}>{messageElements}</div>
    </div>
  );
};

export default Im;
