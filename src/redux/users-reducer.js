const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

const initialState = {
  users: [
    // {
    //   id: 1,
    //   avatarURL:
    //     'https://sun9-7.userapi.com/c850420/v850420791/197dca/5gv1wntX7pE.jpg?ava=1',
    //   followed: false,
    //   fullName: 'Alex',
    //   status: "Hello, I'm domosedov!",
    //   location: { city: 'Moscow', country: 'Russia' }
    // },
    // {
    //   id: 2,
    //   avatarURL:
    //     'https://sun1-83.userapi.com/c845322/v845322463/1fbe41/oD8txtk8Bkc.jpg?ava=1',
    //   followed: false,
    //   fullName: 'Sonya',
    //   status: 'Sofik - popik',
    //   location: { city: 'Moscow', country: 'Russia' }
    // },
    // {
    //   id: 3,
    //   avatarURL:
    //     'https://sun9-2.userapi.com/c850120/v850120482/1d59e3/phS7Sqr0ztc.jpg?ava=1',
    //   followed: true,
    //   fullName: 'Yuriy',
    //   status: 'Loh',
    //   location: { city: 'Saratov', country: 'Russia' }
    // }
  ]
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }
          return user;
        })
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          }
          return user;
        })
      };

    case SET_USERS:
      return { ...state, users: [...state.users, ...action.users] };

    default:
      return state;
  }
};

export const followAC = userId => ({ type: FOLLOW, userId });
export const unFollowAC = userId => ({ type: UNFOLLOW, userId });
export const setUsersAC = users => ({ type: SET_USERS, users });

export default usersReducer;
