import { authAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

const initialState = {
  userId: null,
  login: null,
  email: null,
  isAuth: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true
      };

    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };

    default:
      return state;
  }
};

// action creator
export const setUserData = (userId, email, login) => ({
  type: SET_USER_DATA,
  data: { userId, email, login }
});


// thunk
export const getAuthUserData = () => dispatch => {
  authAPI.me().then(response => {
    if (response.data.resultCode === 0) {
      let { id, email, login } = response.data.data;
      dispatch(setUserData(id, email, login));
    }
  });
};

export default authReducer;
