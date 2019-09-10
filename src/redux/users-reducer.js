const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';

const initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1
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

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.pageNumber
      };

    case SET_USERS:
      // return { ...state, users: [...state.users, ...action.users] }; - дописываем юзеров
      return { ...state, users: action.users };

    case SET_USERS_TOTAL_COUNT:
      return { ...state, totalUsersCount: action.count };

    default:
      return state;
  }
};

export const followAC = userId => ({ type: FOLLOW, userId });
export const unFollowAC = userId => ({ type: UNFOLLOW, userId });
export const setUsersAC = users => ({ type: SET_USERS, users });
export const setCurrentPageAC = pageNumber => ({
  type: SET_CURRENT_PAGE,
  pageNumber
});
export const setUsersTotalCountAC = count => ({
  type: SET_USERS_TOTAL_COUNT,
  count
});

export default usersReducer;
