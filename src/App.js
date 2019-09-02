import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import ImContainer from "./components/Im/Im.Container";

function App(props) {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Sidebar state={props.state.sidebar} store={props.store} />
      <main className="App__main">
        <Route path="/profile" render={() => <Profile store={props.store} />} />
        <Route path="/im" render={() => <ImContainer store={props.store} />} />
        <Route path="/news" render={() => <News />} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
