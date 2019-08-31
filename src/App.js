import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import Im from "./components/Im/Im";
import News from "./components/News/News";

function App(props) {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Sidebar state={props.store.getState().sidebar} />
      <main className="App__main">
        <Route
          path="/profile"
          render={() => <Profile profilePage={props.store.getState().profilePage} addPost={props.store.addPost} updateNewPostText={props.store.updateNewPostText}/>}
        />
        <Route path="/im" render={() => <Im state={props.store.getState().imPage} />} />
        <Route path="/news" render={() => <News />} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
