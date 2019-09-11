// Libs
import React from 'react';
import { Route } from 'react-router-dom';
// Style
import './App.css';
// Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import News from './components/News/News';
// Container Components
import ImContainer from './components/Im/Im.Container';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <aside>
        <Sidebar />
      </aside>
      <main className="App__main">
        <Route path="/profile" render={() => <ProfileContainer />} />
        <Route path="/im" render={() => <ImContainer />} />
        <Route path="/news" render={() => <News />} />
        <Route path="/users" render={() => <UsersContainer />} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
