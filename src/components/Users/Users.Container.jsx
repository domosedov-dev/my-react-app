import { connect } from "react-redux";
import {
  followAC,
  unFollowAC,
  setUsersAC,
  setCurrentPageAC,
  setUsersTotalCountAC,
  toggleIsFetchingAC
} from "../../redux/users-reducer";
import React from "react";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then(response => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setUsersTotalCount(response.data.totalCount);
      });
  }

  onPageChanged = page => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(page);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
      )
      .then(response => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
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

const mapDispatchToProps = dispatch => ({
  follow: userId => {
    dispatch(followAC(userId));
  },
  unFollow: userId => {
    dispatch(unFollowAC(userId));
  },
  setUsers: users => {
    dispatch(setUsersAC(users));
  },
  setCurrentPage: pageNumber => {
    dispatch(setCurrentPageAC(pageNumber));
  },
  setUsersTotalCount: count => {
    dispatch(setUsersTotalCountAC(count));
  },
  toggleIsFetching: isFetching => {
    dispatch(toggleIsFetchingAC(isFetching));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersContainer);
