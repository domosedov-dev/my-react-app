import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
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
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navbar />
        <Sidebar />
        <main className="App__main">
          <Route path="/profile" render={() => <Profile state={props.state.profilePage}/>} />
          <Route path="/im" render={() => <Im state={props.state.imPage} />} />
          <Route path="/news" render={() => <News />} />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
