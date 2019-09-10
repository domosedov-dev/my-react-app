import React from 'react';
import * as axios from 'axios';
import style from './Users.module.css';
import avatar from '../../assets/images/avatar.png';

class Users extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setUsersTotalCount(response.data.totalCount);
      });
  }

  onPageChanged = page => {
    this.props.setCurrentPage(page);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
      )
      .then(response => {
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    console.log(pages);

    return (
      <div>
        <div className={style.pagination}>
          {pages.map((page, index) => {
            return (
              <span
                onClick={() => {
                  this.onPageChanged(page);
                }}
                className={
                  this.props.currentPage === page ? style.selectedPage : null
                }
                key={index}
              >
                {page}
              </span>
            );
          })}
        </div>
        {this.props.users.map(user => {
          return (
            <div key={user.id}>
              <span>
                <div>
                  <img
                    className={style.avatar}
                    src={
                      user.photos.small !== null ? user.photos.small : avatar
                    }
                    alt={user.name}
                  />
                </div>
                <div>
                  {user.followed ? (
                    <button
                      onClick={() => {
                        this.props.unFollow(user.id);
                      }}
                    >
                      Unfollow
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        this.props.follow(user.id);
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
  }
}

export default Users;
