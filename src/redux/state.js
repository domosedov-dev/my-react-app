let rerender = () => {
  console.log('State was changed!');
};

const state = {
  profilePage: {
    posts: [
      { id: 1, title: "Hello", content: "Post content number 1" },
      { id: 2, title: "News title", content: "Post content number 2" },
      { id: 3, title: "ReactJS", content: "Post content number 3" },
      { id: 4, title: "VueJS", content: "Post content number 4" }
    ],
    newPostText: 'Test post'
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
    ]
  },
  sidebar: {
    friendsSidebar: [
      { id: 1, name: "React", avatar: "https://cdn.svgporn.com/logos/react.svg" },
      { id: 2, name: "Vue", avatar: "https://cdn.svgporn.com/logos/vue.svg" },
      { id: 3, name: "Angular", avatar: "https://cdn.svgporn.com/logos/angular-icon.svg" },
      { id: 4, name: "Svelte", avatar: "https://pbs.twimg.com/profile_images/1121395911849062400/7exmJEg4_400x400.png" }
    ]
  }
};

export const addPost = () => {
  let newPost = {
    id: 5,
    title: `${state.profilePage.newPostText} - title`,
    content: `${state.profilePage.newPostText} - content`
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerender(state);
};

export const updateNewPostText = (newtext) => {
  state.profilePage.newPostText = newtext;
  rerender(state);
};

export const subscribe = (observer) => {
  rerender = observer;
};


export default state;
