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
  }
};

export default state;
