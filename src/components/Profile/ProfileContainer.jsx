import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  getStatus,
  getUserProfile,
  updateStatus
} from "../../redux/profile-reducer";
import { withRouter } from "react-router-dom";
// import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {

    // // Получаем id пользователя из GET параметров
    // let userId = this.props.match.params.userId;
    //
    // // Если в GET пусто, то получаем id авторизованного пользователя
    // if (!userId) {
    //   userId = this.props.authorizedUserId;
    //   // Если нет авторизованного пользователя, то делаем редирект на страницу логина
    //   if (!userId) {
    //     this.props.history.push("/login");
    //   } else {
    //       this.props.getUserProfile(userId);
    //       this.props.getStatus(userId);
    //   }
    // } else {
    //     this.props.getUserProfile(userId);
    //     this.props.getStatus(userId);
    // }

    // Тестовый вариант
    let userId = this.props.match.params.userId || this.props.authorizedUserId;

    if(!userId) {
      this.props.history.push("/login");
    } else {
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

  }

  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      />
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth
});

export default compose(
  connect(
    mapStateToProps,
    {
      getUserProfile,
      getStatus,
      updateStatus
    }
  ),
  // withAuthRedirect,
  withRouter
)(ProfileContainer);
