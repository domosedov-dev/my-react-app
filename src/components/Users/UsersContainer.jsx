import { connect } from "react-redux";
import {
  follow,
  unFollow,
  setUsers,
  setCurrentPage,
  setUsersTotalCount,
  toggleIsFetching
} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { usersAPI } from "../../api/api";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
      usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items);
      this.props.setUsersTotalCount(data.totalCount);
    });
  }

  onPageChanged = pageNumber => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(pageNumber);
      usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items);
    });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          onPageChanged={this.onPageChanged}
          follow={this.props.follow}
          unFollow={this.props.unFollow}
        />
      </>
    );
  }
}

const mapStateToProps = state => ({
  users: state.usersPage.users,
  pageSize: state.usersPage.pageSize,
  totalUsersCount: state.usersPage.totalUsersCount,
  currentPage: state.usersPage.currentPage,
  isFetching: state.usersPage.isFetching
});

// Old Variant
// const mapDispatchToProps = dispatch => ({
//   follow: userId => {
//     dispatch(follow(userId));
//   },
//   unFollow: userId => {
//     dispatch(unFollow(userId));
//   },
//   setUsers: users => {
//     dispatch(setUsers(users));
//   },
//   setCurrentPage: pageNumber => {
//     dispatch(setCurrentPage(pageNumber));
//   },
//   setUsersTotalCount: count => {
//     dispatch(setUsersTotalCountAC(count));
//   },
//   toggleIsFetching: isFetching => {
//     dispatch(toggleIsFetching(isFetching));
//   }
// });

// Old Variant 2
// export default connect(
//   mapStateToProps,
//   {
//     follow: follow,
//     unFollow: unFollow,
//     setUsers: setUsers,
//     setCurrentPage: setCurrentPage,
//     setUsersTotalCount: setUsersTotalCountAC,
//     toggleIsFetching: toggleIsFetching
//   }
// )(UsersContainer);

export default connect(
  mapStateToProps,
  {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setUsersTotalCount,
    toggleIsFetching
  }
)(UsersContainer);
