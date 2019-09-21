const SEND_MESSAGE = "SEND_MESSAGE";

const initialState = {
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
};

const imReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let id = state.messages.length + 1;
      return {
        ...state,
        messages: [...state.messages, { id, message: action.newMessageText }]
      };
    }

    default:
      return state;
  }
};

export const addMessageActionCreator = newMessageText => {
  return {
    type: SEND_MESSAGE,
    newMessageText
  };
};

export default imReducer;

