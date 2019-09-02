import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import imReducer from "./im-reducer";
import sidebarReducer from "./sidebar-reducer";

const reducers = combineReducers({
    profilePage: profileReducer,
    imPage: imReducer,
    sidebar: sidebarReducer
});

const store = createStore(reducers);

export default store;