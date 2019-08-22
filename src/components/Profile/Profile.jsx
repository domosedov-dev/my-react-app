import React from 'react';
import style from './Profile.module.css';
import Posts from "./Posts/Posts";

const Profile = (props) => {
    return (
        <main className={style.main}>
            <Posts/>
        </main>
    );
};

export default Profile;