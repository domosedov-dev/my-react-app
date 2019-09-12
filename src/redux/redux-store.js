import { combineReducers, createStore } from 'redux';
import profileReducer from './profile-reducer';
import imReducer from './im-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer from './users-reducer';
import authReducer from "./auth-reducer";

const reducers = combineReducers({
  profilePage: profileReducer,
  imPage: imReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer
});

const store = createStore(reducers);

window.store = store;

export default store;
