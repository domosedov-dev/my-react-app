const state = {
  profilePage: {
    posts: [
      { title: "Hello", content: "Post content number 1" },
      { title: "News title", content: "Post content number 2" },
      { title: "ReactJS", content: "Post content number 3" },
      { title: "VueJS", content: "Post content number 4" }
    ]
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

export default state;
