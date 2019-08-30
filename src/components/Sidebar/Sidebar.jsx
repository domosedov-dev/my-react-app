import React from 'react';
import style from './Sidebar.module.css';
import FriendList from "./FriendsList/FriendList";

const Sidebar = (props) => {
    return (
        <aside className={style.sidebar}>
          <FriendList state={props.state.friendsSidebar}/>
        </aside>
    );
};

export default Sidebar;