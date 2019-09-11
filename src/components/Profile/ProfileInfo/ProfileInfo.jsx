import React from "react";
import style from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = props => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      <img
        src="https://picsum.photos/200/300"
        alt="avatar"
        className={style.avatar}
      />
      <div>
        <h1>{props.profile.fullName}</h1>
        <h3>{props.profile.aboutMe}</h3>
        <img src={props.profile.photos.small} alt={props.profile.fullName} />
      </div>
    </div>
  );
};

export default ProfileInfo;
