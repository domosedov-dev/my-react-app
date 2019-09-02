const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";

export const imReducer = (state, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let newMessage = {
        id: state.messages.length + 1,
        message: `${state.newMessageText}`
      };
      state.messages.push(newMessage);
      state.newMessageText = "";
      return state;
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.text;
      return state;
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
