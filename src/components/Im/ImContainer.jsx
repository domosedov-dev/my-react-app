import { addMessageActionCreator } from "../../redux/im-reducer";
import Im from "./Im";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

const mapStateToProps = state => {
  return {
    dialogs: state.imPage.dialogs,
    messages: state.imPage.messages,
    newMessageText: state.imPage.newMessageText
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addMessage: newMessageText => {
      dispatch(addMessageActionCreator(newMessageText));
    }
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withAuthRedirect
)(Im);
