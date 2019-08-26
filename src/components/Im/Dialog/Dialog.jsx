import style from "./Dialog.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

export const Dialog = props => {
    return (
        <div className={style.dialog}>
            <NavLink to={`/im/${props.id}`}>{props.name}</NavLink>
        </div>
    );
};

export default Dialog;