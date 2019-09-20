import React from "react";
import style from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/Posts.Container";

const Profile = props => {
  return (
    <div className={style.profile}>
      <ProfileInfo profile={props.profile} />
        <hr/>
        <h2>My Posts</h2>
      <PostsContainer />
    </div>
  );
};

export default Profile;
