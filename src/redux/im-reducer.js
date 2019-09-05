const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";

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
  ],
  newMessageText: "New message"
};

const imReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let newMessage = {
        id: state.messages.length + 1,
        message: `${state.newMessageText}`
      };
      return {
        ...state,
        messages: [...state.messages, newMessage],
        newMessageText: ""
      };
    }
    case UPDATE_NEW_MESSAGE_TEXT: {
      // Старый вариант
      // let stateCopy = { ...state, newMessageText: action.text };
      // return stateCopy;
      return { ...state, newMessageText: action.text };
    }
    default:
      return state;
  }
};

export const addMessageActionCreator = () => {
  return {
    type: SEND_MESSAGE
  };
};

export const updateNewMessageTextActionCreator = text => {
  return { type: UPDATE_NEW_MESSAGE_TEXT, text };
};

export default imReducer;
