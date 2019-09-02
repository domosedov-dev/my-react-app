const initialState = {
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
};

const sidebarReducer = (state = initialState, action) => {
  return state;
};

export default sidebarReducer;
