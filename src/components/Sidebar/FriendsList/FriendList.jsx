import React from 'react';
import style from './FriendList.module.css';
import Friend from "./Friend/Friend";

const FriendList = props => {
    const friendsItems = props.sidebar.map(el => {
        const {id, name, avatar} = el;
        return <Friend key={id} name={name} avatar={avatar}/>
    });

    return (
        <ul className={style.friendList}>
            {friendsItems}
        </ul>
    );
};

export default FriendList;