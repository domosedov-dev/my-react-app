import React from 'react';

const Users = props => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        avatarURL:
          'https://sun9-7.userapi.com/c850420/v850420791/197dca/5gv1wntX7pE.jpg?ava=1',
        followed: false,
        fullName: 'Alex',
        status: "Hello, I'm domosedov!",
        location: { city: 'Moscow', country: 'Russia' }
      },
      {
        id: 2,
        avatarURL:
          'https://sun1-83.userapi.com/c845322/v845322463/1fbe41/oD8txtk8Bkc.jpg?ava=1',
        followed: false,
        fullName: 'Sonya',
        status: 'Sofik - popik',
        location: { city: 'Moscow', country: 'Russia' }
      },
      {
        id: 3,
        avatarURL:
          'https://sun9-2.userapi.com/c850120/v850120482/1d59e3/phS7Sqr0ztc.jpg?ava=1',
        followed: true,
        fullName: 'Yuriy',
        status: 'Loh',
        location: { city: 'Saratov', country: 'Russia' }
      }
    ]);
  }

  return (
    <div>
      {props.users.map(user => {
        return (
          <div key={user.id}>
            <span>
              <div>
                <img src={user.avatarURL} alt={user.fullName} />
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
                <div>{user.fullName}</div>
                <div>{user.status}</div>
              </span>
              <span>
                <div>{user.location.country}</div>
                <div>{user.location.city}</div>
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
