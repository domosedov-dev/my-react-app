const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const ADD_MESSAGE = "ADD_MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";

const Store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, title: "Hello", content: "Post content number 1" },
        { id: 2, title: "News title", content: "Post content number 2" },
        { id: 3, title: "ReactJS", content: "Post content number 3" },
        { id: 4, title: "VueJS", content: "Post content number 4" }
      ],
      newPostText: "Test post"
    },
    imPage: {
      dialogs: [
        { id: 1, name: "Sasha" },
        { id: 2, name: "Sonya" },
        { id: 3, name: "Svyatik" },
        { id: 4, name: "Vladik" },
        { id: 5, name: "React" }
      ],
      messages: [
        { id: 1, message: "Hi!" },
        { id: 2, message: "Hi!" },
        { id: 3, message: "How are you?" },
        { id: 4, message: "Fine!" }
      ],
      newMessageText: "New message"
    },
    sidebar: {
      friendsSidebar: [
        {
          id: 1,
          name: "React",
          avatar: "https://cdn.svgporn.com/logos/react.svg"
        },
        { id: 2, name: "Vue", avatar: "https://cdn.svgporn.com/logos/vue.svg" },
        {
          id: 3,
          name: "Angular",
          avatar: "https://cdn.svgporn.com/logos/angular-icon.svg"
        },
        {
          id: 4,
          name: "Svelte",
          avatar:
            "https://pbs.twimg.com/profile_images/1121395911849062400/7exmJEg4_400x400.png"
        }
      ]
    }
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  _callSubscriber() {
    console.log("State was changed!");
  },

  getState() {
    return this._state;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: this._state.profilePage.posts.length + 1,
        title: `${this._state.profilePage.newPostText} - title`,
        content: `${this._state.profilePage.newPostText} - content`
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.text;
      this._callSubscriber(this._state);
    } else if (action.type === ADD_MESSAGE) {
      let newMessage = {
        id: this._state.imPage.messages.length + 1,
        message: `${this._state.imPage.newMessageText}`
      };
      this._state.imPage.messages.push(newMessage);
      this._state.imPage.newMessageText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.imPage.newMessageText = action.text;
      this._callSubscriber(this._state);
    }
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

export const addMessageActionCreator = () => {
  return {
    type: ADD_MESSAGE
  };
};

export const updateNewMessageTextActionCreator = text => {
  return { type: UPDATE_NEW_MESSAGE_TEXT, text };
};

export default Store;
window.store = Store;
