import { connect } from "react-redux";
import {
  setCurrentPage,
  toggleFollowingProgress,
  requestUsers,
  follow,
  unfollow
} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
// import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import {
  getPageSize,
  getTotalUsersCount,
  getCurrentPage,
  getIsFetching,
  getFollowingInProgress,
  getUsers
} from "../../redux/users-selectors";

class UsersContainer extends React.Component {
  componentDidMount() {
    const { requestUsers, currentPage, pageSize } = this.props;
    requestUsers(currentPage, pageSize);
  }

  onPageChanged = pageNumber => {
    let { requestUsers, pageSize } = this.props;
    requestUsers(pageNumber, pageSize);
  };

  render() {
    let {
      isFetching,
      totalUsersCount,
      pageSize,
      currentPage,
      users,
      followingInProgress,
      unfollow,
      follow
    } = this.props;

    return (
      <>
        {isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={totalUsersCount}
          pageSize={pageSize}
          currentPage={currentPage}
          users={users}
          onPageChanged={this.onPageChanged}
          followingInProgress={followingInProgress}
          unfollow={unfollow}
          follow={follow}
        />
      </>
    );
  }
}

const mapStateToProps = state => ({
  users: getUsers(state),
  pageSize: getPageSize(state),
  totalUsersCount: getTotalUsersCount(state),
  currentPage: getCurrentPage(state),
  isFetching: getIsFetching(state),
  followingInProgress: getFollowingInProgress(state)
});

export default compose(
  connect(
    mapStateToProps,
    {
      // Action Creators
      setCurrentPage,
      toggleFollowingProgress,
      // add thunk
      requestUsers,
      follow,
      unfollow
    }
  )
  // withAuthRedirect
)(UsersContainer);
