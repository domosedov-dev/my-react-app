// Libs
import React, { Component } from "react";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import {connect, Provider} from "react-redux";
import { compose } from "redux";

// Style
import "./App.css";

// Functional Components
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import News from "./components/News/News";
import Login from "./components/Login/Login";

// Container Components
import ImContainer from "./components/Im/ImContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Welcome from "./components/Welcome/Welcome";
import HeaderContainer from "./components/Header/HeaderContainer";
import { initializeApp } from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className="App">
        <HeaderContainer />
        <Navbar />
        <aside>
          <Sidebar />
        </aside>
        <main className="App__main">
          <Route exact path="/" render={() => <Welcome />} />
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/im" render={() => <ImContainer />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/login" render={() => <Login />} />
        </main>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  initialized: state.app.initialized
});

let AppContainer = compose(
  connect(
    mapStateToProps,
    {
      initializeApp
    }
  ),
  withRouter
)(App);

let MainApp = (props) => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </BrowserRouter>
    )
};

export default MainApp;

