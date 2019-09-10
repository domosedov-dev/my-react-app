import { connect } from 'react-redux';
import Users from './Users';
import {
  followAC,
  unFollowAC,
  setUsersAC,
  setCurrentPageAC,
  setUsersTotalCountAC
} from '../../redux/users-reducer';

const mapStateToProps = state => ({
  users: state.usersPage.users,
  pageSize: state.usersPage.pageSize,
  totalUsersCount: state.usersPage.totalUsersCount,
  currentPage: state.usersPage.currentPage
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
  }
});

const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);

export default UsersContainer;
