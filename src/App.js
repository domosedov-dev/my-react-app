// Libs
import React from "react";
import { Route } from "react-router-dom";
// Style
import "./App.css";
// Components
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


const App = () => {
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
};

export default App;
