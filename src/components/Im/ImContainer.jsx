import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator
} from "../../redux/im-reducer";
import Im from "./Im";
import { connect } from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const mapStateToProps = state => {
  return {
    dialogs: state.imPage.dialogs,
    messages: state.imPage.messages,
    newMessageText: state.imPage.newMessageText
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

let AuthRedirectComponent = withAuthRedirect(Im);

const ImContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthRedirectComponent);

export default ImContainer;
