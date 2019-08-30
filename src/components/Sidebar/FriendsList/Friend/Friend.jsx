import React from "react";
import style from "./Friend.module.css";

const Friend = props => {
  return (
    <li className={style.friend}>
      <img src={props.avatar} alt="" />
      <h3>{props.name}</h3>
    </li>
  );
};

export default Friend;
