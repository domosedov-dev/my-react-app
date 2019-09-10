import React from 'react';
import style from './Users.module.css';
import avatar from '../../assets/images/avatar.png';

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
            <h1>hello</h1>
            <span>
              <div>
                <img
                  className={style.avatar}
                  src={user.photos.small !== null ? user.photos.small : avatar}
                  alt={user.name}
                />
              </div>
              <div>
                {user.followed ? (
                  <button
                    onClick={() => {
                      props.unFollow(user.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
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
                <div>{'user.location.country'}</div>
                <div>{'user.location.city'}</div>
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
