import React from "react";
import style from "./Users.module.css";
import avatar from "../../assets/images/avatar.png";
import { NavLink } from "react-router-dom";

const Users = props => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div className={style.pagination}>
        {pages.map((page, index) => {
          return (
            <span
              onClick={() => {
                props.onPageChanged(page);
              }}
              className={props.currentPage === page ? style.selectedPage : null}
              key={index}
            >
              {page}
            </span>
          );
        })}
      </div>
      {props.users.map(user => {
        return (
          <div key={user.id}>
            <span>
              <div>
                <NavLink to={`/profile/${user.id}`}>
                  <img
                    className={style.avatar}
                    src={
                      user.photos.small !== null ? user.photos.small : avatar
                    }
                    alt={user.name}
                  />
                </NavLink>
              </div>
              <div>
                {user.followed ? (
                  <button
                    disabled={props.followingInProgress.some(
                      id => id === user.id
                    )}
                    onClick={() => {
                      props.unfollow(user.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    disabled={props.followingInProgress.some(
                      id => id === user.id
                    )}
                    onClick={() => {
                      props.follow(user.id);
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </span>
            <span>
              <span>
                <div>{user.name}</div>
                <div>{user.status}</div>
              </span>
              <span>
                <div>{"user.location.country"}</div>
                <div>{"user.location.city"}</div>
              </span>
            </span>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Users;
