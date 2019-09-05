import React from "react";
import style from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/Posts.Container";

const Profile = () => {
  return (
    <div className={style.profile}>
      <ProfileInfo />
      <PostsContainer />
    </div>
  );
};

export default Profile;
