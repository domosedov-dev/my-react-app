import React from "react";
import style from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import avatar from "../../../assets/images/avatar.png";
import ProfileStatus from './ProfileStatus/ProfileStatus'

const ProfileInfo = props => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <img
        src="https://picsum.photos/1000/200"
        alt="avatar"
        className={style.background}
      />
      <div>
        <h1>{props.profile.fullName}</h1>
        <h3>{props.profile.aboutMe}</h3>
        <img className={style.avatar} src={props.profile.photos.large !== null ? props.profile.photos.large : avatar} alt={props.profile.fullName} />
        <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
      </div>
    </div>
  );
};

export default ProfileInfo;
