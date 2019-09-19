import React from "react";
import style from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import avatar from "../../../assets/images/avatar.png";

const ProfileInfo = props => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      <img
        src="https://picsum.photos/200/300"
        alt="avatar"
        className={style.background}
      />
      <div>
        <h1>{props.profile.fullName}</h1>
        <h3>{props.profile.aboutMe}</h3>
        <img className={style.avatar} src={props.profile.photos.small !== null ? props.profile.photos.small : avatar} alt={props.profile.fullName} />
      </div>
    </div>
  );
};

export default ProfileInfo;
