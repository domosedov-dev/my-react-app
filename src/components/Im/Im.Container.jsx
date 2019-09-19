import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator
} from "../../redux/im-reducer";
import Im from "./Im";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    dialogs: state.imPage.dialogs,
    messages: state.imPage.messages,
    newMessageText: state.imPage.newMessageText,
    isAuth: state.auth.isAuth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateNewMessageText: text => {
      dispatch(updateNewMessageTextActionCreator(text));
    },
    addMessage: () => {
      dispatch(addMessageActionCreator());
    }
  };
};

const ImContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Im);

export default ImContainer;
