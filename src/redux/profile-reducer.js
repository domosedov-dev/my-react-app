import { profileAPI } from "../api/api";

const ADD_POST = "my-app/profile/ADD-POST";
const SET_USER_PROFILE = "my-app/profile/SET_USER_PROFILE";
const SET_STATUS = "my-app/profile/SET_STATUS";
const DELETE_POST = "my-app/profile/DELETE_POST";

// Начальное состояние State(по умолчанию)
const initialState = {
  profile: null,
  status: "",
  posts: [
    { id: 1, title: "Hello", content: "Post content number 1" },
    { id: 2, title: "News title", content: "Post content number 2" },
    { id: 3, title: "ReactJS", content: "Post content number 3" },
    { id: 4, title: "VueJS", content: "Post content number 4" }
  ]
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let { title, content } = action.newPostObject;
      let newPost = {
        id: state.posts.length + 1,
        title,
        content
      };

      return { ...state, posts: [...state.posts, newPost] };
    }

    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };

    case SET_STATUS:
      return { ...state, status: action.status };

    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.postId)
      };

    default:
      return state;
  }
};

// Action Creators
export const addPostActionCreator = newPostObject => ({
  type: ADD_POST,
  newPostObject
});

export const setUserProfile = profile => ({ type: SET_USER_PROFILE, profile });

export const setStatus = status => ({
  type: SET_STATUS,
  status
});

export const deletePost = postId => ({ type: DELETE_POST, postId });

// Thunk Creators
export const getUserProfile = userId => async dispatch => {
  let response = await profileAPI.getProfile(userId);
  dispatch(setUserProfile(response));
};

export const getStatus = userId => async dispatch => {
  let response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
};

export const updateStatus = status => async dispatch => {
  let response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export default profileReducer;
