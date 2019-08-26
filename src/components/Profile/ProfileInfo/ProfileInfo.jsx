import React from 'react';
import style from './ProfileInfo.module.css';

const ProfileInfo = props => {
    return (
        <img src="https://picsum.photos/200/300" alt="avatar" className={style.avatar}/>
    );
};

export default ProfileInfo;