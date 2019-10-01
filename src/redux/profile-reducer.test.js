import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
  posts: [
    { id: 1, title: "Hello", content: "Post content number 1" },
    { id: 2, title: "News title", content: "Post content number 2" },
    { id: 3, title: "ReactJS", content: "Post content number 3" },
    { id: 4, title: "VueJS", content: "Post content number 4" }
  ]
};

it("length of posts should be incremented", () => {
  // 1. test data

  let action = addPostActionCreator("Test Post");

  // 2. action

  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(5);
});

it("after deleting length of posts should be decrement", () => {
  // 1. test data

  let action = deletePost(1);

  // 2. action

  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(3);
});

