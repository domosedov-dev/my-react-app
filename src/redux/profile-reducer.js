const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";

// Начальное состояние State(по умолчанию)
const initialState = {
  posts: [
    { id: 1, title: "Hello", content: "Post content number 1" },
    { id: 2, title: "News title", content: "Post content number 2" },
    { id: 3, title: "ReactJS", content: "Post content number 3" },
    { id: 4, title: "VueJS", content: "Post content number 4" }
  ],
  newPostText: "Test post"
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: state.posts.length + 1,
        title: `${state.newPostText} - title`,
        content: `${state.newPostText} - content`
      };
      // Old variant
      // let stateCopy = { ...state };
      // stateCopy.posts = [...state.posts];
      // stateCopy.posts.push(newPost);
      // stateCopy.newPostText = "";
      // return stateCopy;

      return { ...state, posts: [...state.posts, newPost], newPostText: "" };
    }
    case UPDATE_NEW_POST_TEXT: {
      return { ...state, newPostText: action.text };
    }
    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST
  };
};

export const updateNewPostTextActionCreator = text => {
  return { type: UPDATE_NEW_POST_TEXT, text };
};

export default profileReducer;
