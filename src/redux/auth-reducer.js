import { authAPI } from "../api/api";
import {stopSubmit} from "redux-form";

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
        ...action.payload
      };

    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };

    default:
      return state;
  }
};

// action creator
export const setUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth }
});

// thunk
export const getAuthUserData = () => dispatch => {
  return authAPI.me().then(response => {
    if (response.data.resultCode === 0) {
      let { id, email, login } = response.data.data;
      dispatch(setUserData(id, email, login, true));
    }
  });
};

export const login = (email, password, rememberMe) => dispatch => {

  authAPI.login(email, password, rememberMe).then(response => {
    if (response.data.resultCode === 0) {
      dispatch(getAuthUserData());
    } else {
      let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Какая-то ошибка!';
      dispatch(stopSubmit("login", {_error: message}));
    }
  });
};

export const logout = () => dispatch => {
  authAPI.logout().then(response => {
    if (response.data.resultCode === 0) {
      dispatch(setUserData(null, null, null, false));
    }
  });
};

export default authReducer;
