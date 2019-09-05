import FriendList from "./FriendsList/FriendList";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    sidebar: state.sidebar.friendsSidebar
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

const Sidebar = connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendList);

export default Sidebar;
