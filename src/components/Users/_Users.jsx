import React from 'react';
import * as axios from 'axios';
import style from './Users.module.css';
import avatar from '../../assets/images/avatar.png';

const Users = props => {
  let getUsers = () => {
    if (props.users.length === 0) {
      axios
        .get('https://social-network.samuraijs.com/api/1.0/users')
        .then(response => {
          props.setUsers(response.data.items);
        });
    }
  };

  return (
    <div>
      <button onClick={getUsers}>Get Users</button>
      {props.users.map(user => {
        return (
          <div key={user.id}>
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
